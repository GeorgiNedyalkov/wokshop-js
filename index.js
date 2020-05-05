const env = process.env.NODE_ENV || 'development';
global.__basedir = __dirname;

const cubeModel = require('./models/cube');
cubeModel.update(1, {desc: 'test test'}).then((updated) => console.log(updated));


// cubeModel.insert({ name: 'Test1', description: 'test12' }).then(insertedCube => {
//     console.log(insertedCube);
//     return cubeModel.delete(insertedCube.id);
// }).then((deletedCube) => {
//     console.log('Deleted cube', deletedCube);
//     console.log('lastIndex should be 1 and we should not have any cubes');
// });

// const config = require('./config/config')[env];
// const app = require('express')();

// require('./config/express')(app);
// require('./config/routes')(app);

// app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));