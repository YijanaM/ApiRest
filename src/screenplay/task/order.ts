import { Task } from "@serenity-js/core";
import { PostRequest, Send } from "@serenity-js/rest";
import { stringify } from "querystring";

export const urlBase = 'https://petstore3.swagger.io/api/v3/'

export const orderPet = (): Task => {
    return Task.where('order pet',
        Send.a(PostRequest.to(urlBase + 'store/order').using(
            {
                data: {
                    "id": 10,
                    "petId": 198772,
                    "quantity": 7,
                    "shipDate": "2024-05-18T23:20:36.233Z",
                    "status": "approved",
                    "complete": true
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ))


    )
}