import { DataTable, Then, When } from '@cucumber/cucumber';
import { deleteOrder} from "../../src/screenplay/task/deleteOrder"
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { actorCalled } from '@serenity-js/core';


When('{actor} tries to delete the order with ID {string}', async (actor: Actor, Id: String) =>{
    await actor.attemptsTo(
        deleteOrder(Id)
    );
})

Then('the order with ID {string} should be deleted successfully', async (orderId: String) =>{
    git
})






