// Import necessary modules
const { Sequelize, DataTypes } = require('sequelize');

// Set up the database connection (SQLite example)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Path to your SQLite database
});

// Define the `Usuario` model
const Usuario = sequelize.define('Usuario', {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha: { type: DataTypes.STRING, allowNull: false },
});

// Define the `Vaga` model
const Vaga = sequelize.define('Vaga', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    descricao: { type: DataTypes.TEXT, allowNull: false },
    dataCadastro: { type: DataTypes.DATE, allowNull: false },
    telefone: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
    empresa: { type: DataTypes.STRING, allowNull: false },
});

// Function to populate the database
async function populateDatabase() {
    try {
        // Sync the database (force: true will recreate tables)
        await sequelize.sync({ force: true });

        // Insert sample users
        await Usuario.bulkCreate([
            { nome: "Ana Costa", email: "ana.costa@example.com", senha: "senha123" },
            { nome: "Bruno Marques", email: "bruno.marques@example.com", senha: "senha456" },
            { nome: "Camila Santos", email: "camila.santos@example.com", senha: "senha789" },
            { nome: "Diego Ferreira", email: "diego.ferreira@example.com", senha: "senha101112" },
            { nome: "Elisa Lima", email: "elisa.lima@example.com", senha: "senha131415" },
        ]);

        // Insert sample job postings
        await Vaga.bulkCreate([
            { titulo: "Desenvolvedor Backend", descricao: "Node.js expertise required.", dataCadastro: new Date(), telefone: "1234-5678", status: "aberta", empresa: "Tech Solutions" },
            { titulo: "Gerente de Projetos", descricao: "PMP certification needed.", dataCadastro: new Date(), telefone: "8765-4321", status: "aberta", empresa: "Project Masters" },
            { titulo: "UI/UX Designer", descricao: "Experience in Figma and Sketch.", dataCadastro: new Date(), telefone: "5678-1234", status: "aberta", empresa: "Creative Studio" },
            { titulo: "Data Analyst", descricao: "Proficiency in Python and SQL.", dataCadastro: new Date(), telefone: "4321-8765", status: "aberta", empresa: "Data Insights" },
            { titulo: "QA Tester", descricao: "Familiarity with automated testing.", dataCadastro: new Date(), telefone: "1111-2222", status: "aberta", empresa: "Quality Assure" },
        ]);

        console.log("Database populated successfully!");
    } catch (err) {
        console.error("Error populating the database:", err);
    } finally {
        await sequelize.close(); // Close connection
    }
}

// Call the function
populateDatabase();
