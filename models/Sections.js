module.exports = (sequelize, dataTypes) => {
    let alias = 'Sections';
    let cols = {
        idSection: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: dataTypes.STRING,
    }

    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Sections = sequelize.define(alias, cols, config); 
 
    return Sections
};

