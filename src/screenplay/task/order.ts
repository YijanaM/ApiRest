import { Task } from "@serenity-js/core";
import { PostRequest, Send } from "@serenity-js/rest";
import { stringify } from "querystring";

export const urlBase = 'https://petstore.swagger.io/v2/'

export const orderPet = (): Task => {
    return Task.where('order pet',
        Send.a(PostRequest.to(urlBase + 'store/order').using(
            {
                data: {
                    "id": 9965874,
                    "petId": 17588387,
                    "quantity": 17220492,
                    "shipDate": "1968-02-05T07:01:04.430Z",
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