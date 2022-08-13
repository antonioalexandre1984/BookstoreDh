 module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      total_pages: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      release_year: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'books'
  });
return Book;
  };
  

 










 

/* 

const { Model, DataTypes } = require('sequelize');

class Book extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      total_pages: DataTypes.INTEGER,
      author: DataTypes.STRING,
      release_year: DataTypes.STRING,
      stock: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Books',
      timestamps: true
    });
  };
}
module.exports = Book; 
 */