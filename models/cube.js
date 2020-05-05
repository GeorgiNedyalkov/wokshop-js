const fs = require('fs');
const path = require('path');
class Cube {
    constructor() {
        this.data = require('../config/database.json');
    }

    _write(newData, resolveData) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path.resolve('../config/data.json'), JSON.stringify(newData), (err) => {
                if (err) { reject(err); return; }
                this.data = newData;
                resolve(resolveData);
            });
        });
    }

    insert(newCube) {
        const newIndex = this.data.lastIndex++;
        newCube = { id: newIndex, ...newCube };
        const newData = {
            lastIndex: newIndex,
            entities: this.data.entities.concat(newCube)
        };

        return this._write(newData, newCube);
        
    }

    update(cubeId, updates) {
        const entitityIndex = this.data.entities.findIndex(({ id }) => id === cubeId);
        const entity = this.data.entities[entitityIndex];
        const updatedEntity = {...entitity, ...updates};
        const newData = {
            lastIndex: this.data.lastIndex,
            entities: [
                ...this.data.entities.slice(0, entitityIndex),
                updatedEntity,
                ...this.data.entities.slice(entitityIndex + 1)
            ]
        };
        return this._write(newData, updatedEntity);
    }

    delete() {

    }

    getOne(id) {
        Promise.resolve(this.data.entities.find(({ id: i }) => i === id));
        
    }

    getAll() {
        Promise.resolve(this.data.entities);
    }
}

module.exports = new Cube();