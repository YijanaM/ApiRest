import { Task } from "@serenity-js/core";
import { DeleteRequest, LastResponse, Send } from "@serenity-js/rest";
import { urlBase } from "./order";
import { Ensure, equals } from "@serenity-js/assertions";
import { equal } from "assert";

export const deleteOrder = (Id): Task => {
    return Task.where(`delete order with ID `,
        Send.a(DeleteRequest.to(urlBase+'store/order/'+Id).using({
            headers:{
                accept: 'application/json'
            }
        })),
        Ensure.that(LastResponse.status(),equals(200))
    
    )
}


    
