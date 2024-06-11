import {z} from 'zod';

const schema = z.object({
    name:z.string().min(3),
    id:z.number(),
    price:z.number()
})
export default schema;