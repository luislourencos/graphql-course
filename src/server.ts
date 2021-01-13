import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema'
const PORT = process.env.PORT;


const app = express();
//Midleware
app.use(cors());
app.use(compression());


app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))


app.listen(PORT, ()=>{
    console.log(`Running at port http://localhost:${PORT}/graphql`)
})
