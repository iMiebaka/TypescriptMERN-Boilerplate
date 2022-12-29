const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/testplatform"
const PORT = process.env.PORT || 5500;


const config = {
    database: {
        url: DATABASE_URL
    },
    server: {
        PORT
    },
    PLATFORM_NAME: 'Optiquiz'
}

export default config