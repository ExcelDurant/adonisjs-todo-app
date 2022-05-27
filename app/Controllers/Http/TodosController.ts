// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from "@ioc:Adonis/Core/View";

export default class TodosController {
    public async index() {
        const todos = [
            {
                id:1,
                title:'clean the home',
                completed:false
            },
            {
                id:2,
                title:'make a todo app',
                completed:true
            }
        ]
        return View.render('todo/index', {todos})
    }
}
