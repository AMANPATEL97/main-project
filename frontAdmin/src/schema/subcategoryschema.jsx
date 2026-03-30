import * as Y from 'yup'

let subcateschema= Y.object({
    name : Y.string().required("Insert Categroy Name")
})

export default subcateschema;