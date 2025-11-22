const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Environment variables
const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS;
const CUSTOM_OBJECT_TYPE = process.env.CUSTOM_OBJECT_TYPE || '2-194958631';

// HubSpot API configuration
const hubspotConfig = {
    headers: {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json'
    }
};

// Route 1: Homepage - Display all custom object records
app.get('/', async (req, res) => {
    try {
        // GET request to retrieve custom object records
        const response = await axios.get(
            `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}`,
            {
                ...hubspotConfig,
                params: {
                    properties: 'name,description,category',
                    limit: 100
                }
            }
        );

        const customObjects = response.data.results;

        // Render homepage template with data
        res.render('homepage', {
            title: 'Custom Objects | Integrating With HubSpot I Practicum',
            customObjects: customObjects
        });

    } catch (error) {
        console.error('Error fetching custom objects:', error.response?.data || error.message);
        res.status(500).send('Error fetching custom objects. Please check your configuration.');
    }
});

// Route 2: GET form to add new custom object
app.get('/update-cobj', (req, res) => {
    res.render('updates', {
        title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'
    });
});

// Route 3: POST - Create new custom object record
app.post('/update-cobj', async (req, res) => {
    try {
        const { name, description, category } = req.body;

        // POST request to create new custom object
        const response = await axios.post(
            `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}`,
            {
                properties: {
                    name: name,
                    description: description,
                    category: category
                }
            },
            hubspotConfig
        );

        console.log('Custom object created successfully:', response.data.id);

        // Redirect to homepage after successful creation
        res.redirect('/');

    } catch (error) {
        console.error('Error creating custom object:', error.response?.data || error.message);
        res.status(500).send('Error creating custom object. Please check your data.');
    }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📝 Custom Object ID: ${CUSTOM_OBJECT_TYPE}`);
});
