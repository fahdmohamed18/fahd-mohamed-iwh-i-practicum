# Fahd Mohamed - Integrating With HubSpot I: Foundations Practicum

This is a Node.js application that integrates with HubSpot API to manage custom objects.

## Custom Object Link
[View Custom Object List](https://app-eu1.hubspot.com/contacts/147169244/objects/2-194958631/views/all/list)

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/fahdmohamed18/fahd-mohamed-iwh-i-practicum.git
   cd fahd-mohamed-iwh-i-practicum
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

4. Add your HubSpot Private App Access Token to `.env`:
   ```
   PRIVATE_APP_ACCESS=your_access_token_here
   CUSTOM_OBJECT_TYPE=2-194958631
   PORT=3000
   ```

5. Run the application:
   ```bash
   node index.js
   ```

6. Open your browser and visit: `http://localhost:3000`

## Features

- ✅ View all custom object records in a responsive table
- ✅ Add new custom object records via an HTML form
- ✅ Automatic redirect to homepage after creating records
- ✅ Error handling for API calls
- ✅ Modern, responsive UI with gradient design

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Axios** - HTTP client for API calls
- **Pug** - Templating engine
- **HubSpot CRM API** - Custom objects management
- **dotenv** - Environment variable management

## Project Structure

```
fahd-mohamed-iwh-i-practicum/
├── public/
│   └── css/
│       └── style.css
├── views/
│   ├── homepage.pug
│   ├── updates.pug
│   └── contacts.pug
├── .env (not tracked)
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## API Routes

- `GET /` - Homepage displaying all custom objects
- `GET /update-cobj` - Form to add new custom object
- `POST /update-cobj` - Create new custom object record

## Author

**Fahd Mohamed Mahmoud Ibrahim**

## License

ISC
