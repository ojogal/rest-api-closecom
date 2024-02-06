# Node.js REST API Integration with Close.com

This project is a REST API developed with Node.js and Express, designed to integrate with Close.com's API. It allows users to fetch pipelines and opportunities from Close.com and expose this data through a RESTful interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 12.x or higher recommended)
- npm (comes with Node.js)
- A Close.com account and API key for authentication

### Installing

1. **Clone the repository**

```bash
git clone https://yourrepository.com/closecom-rest-api.git
cd closecom-rest-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```env
CLOSE_API_KEY=your_close_api_key
BASE_URL=https://api.close.com/api/v1

```

4. **Start the server**

```bash
npm start
```

Your server should now be running on http://localhost:3000

### Usage

This API provides the following endpoints:

#### Get Pipelines

- Method: GET
- Endpoint: /pipelines
- Description: Fetches all existing pipelines from Close.com.
- Response: A JSON array of pipelines.

**Example request**

```
curl http://localhost:3000/pipelines
```

**Example response**

```
[
  {
    "created_by": null,
    "date_created": "2022-01-05T14:10:38.195611",
    "date_updated": "2022-01-05T14:10:38.195611",
    "id": "pipe_1C5W2Am00Zpc1aEsnUkP5j",
    "name": "Sales",
    "organization_id": "orga_jLya32RDw7deJptFVbwdGRUz1apzJltUFf0wuT91sJw",
    "statuses": [
      {
        "id": "stat_P620xmbI8toNMPmQKSTV66c6TpIpdJcVLqYlepaJnhd",
        "label": "Demo Completed",
        "type": "active"
      },
      {
        "id": "stat_LkZU3ls7KSqvkE8vA0SZu7668zaStjDrvDr9fKcp6u3",
        "label": "Proposal Sent",
        "type": "active"
      },
      {
        "id": "stat_R0VokSRvku47ORfFIi5YXy41U7VQX6F1MiqITiUTbyK",
        "label": "Contract Sent",
        "type": "active"
      },
      {
        "id": "stat_lc5531fWeksbfF73d1zRDo4w4rjYeEZcIPVgdhuklZQ",
        "label": "Won",
        "type": "won"
      },
      {
        "id": "stat_qjuI5xz99duLyeazUIx9hPXUFL99ybP4l050vjIQtE5",
        "label": "Lost",
        "type": "lost"
      }
    ],
    "updated_by": null
  }
]
```

#### Get Opportunities for a Pipeline

- Method: GET
- Endpoint: /pipelines/:pipelineId/opportunities
- Description: Fetches all opportunities associated with a given pipeline.
- Parameters:
    - pipelineId: The ID of the pipeline for which opportunities are fetched.
- Response: A JSON array of opportunities associated with the pipeline.

**Example request**

```
curl http://localhost:3000/pipelines/{pipelineId}/opportunities
```

**Example response**

```
[
  {
    "value_currency": "USD",
    "value_period": "one_time",
    "status_display_name": "Demo Completed",
    "created_by_name": "John Doe",
    "user_id": "user_REhuUT9keuyTZGlS6TBpVGurDCguEUZNCkCyJ1HbGhR",
    "status_type": "active",
    "created_by": "user_REhuUT9keuyTZGlS6TBpVGurDCguEUZNCkCyJ1HbonQ",
    "value_formatted": "$1",
    "value": 100,
    "user_name": "Alexandr O",
    "integration_links": [],
    "lead_id": "lead_mJOMCrloNCfmip7auygNMbOjtNSLbMgh6PG1LCJ6xkl",
    "id": "oppo_wwbWQHyrFhZ8htjP8bWatBjnsRQwRBH3pm4ru8fCMHS",
    "contact_id": null,
    "date_updated": "2024-02-05T17:00:47.476000+00:00",
    "organization_id": "orga_jLya32RDw7deJptFVbwdGRUz1apzJltUFf0wuT91Goc",
    "confidence": 75,
    "date_lost": null,
    "note": "Bruce needs new software for the Bat Cave.",
    "lead_name": "Wayne Enterprises (Example Lead)",
    "updated_by": "user_REhuUT9keuyTZGlS6TBpVGurDCguEUZNCkCyJ1HbonQ",
    "date_won": "2024-02-07",
    "expected_value": 75,
    "updated_by_name": "Alexandr O",
    "status_id": "stat_P620xmbI8toNMPmQKSTV66c6TpIpdJcVLqYlepaObhd",
    "date_created": "2024-02-05T14:11:50.033000+00:00",
    "annualized_expected_value": 75,
    "contact_name": null,
    "annualized_value": 100,
    "status_label": "Demo Completed"
  }
]
```

### Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. In case of an error, the response will include a JSON object with an error key describing the nature of the error.

### Design Decisions

- Node.js and Express: Chosen for their simplicity and efficiency in creating RESTful APIs.
- Environment Variables: Used for configuration to enhance security and flexibility.
- Error Handling: Centralized error handling mechanism to make the code cleaner and more maintainable.
- Modular Design: Controllers, services, and routes are separated to adhere to the Single Responsibility Principle.

### Authors

Alexandr Ojog - Initial work - @ojogal

### License

This project is licensed under the MIT License.

### Acknowledgments

- Thanks to Close.com for providing the API used in this project.