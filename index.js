import { program } from "commander";

import * as contactService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactList = await contactService.listContacts();
      console.table(contactList);
      break;
    case "get":
      const oneContact = await contactService.getContactById(id);
      console.table(oneContact);
      break;
    case "add":
        const addContact = await contactService.addContact(name, email, phone);
        console.table(addContact);
      break;
    case "remove":
        const deleteContactById = await contactService.removeContact(id);
        console.table(deleteContactById);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction({action: "list"})
// invokeAction({action: "get", id: "Z5sbDlS7pCzNsnAHLtDJd"})
// invokeAction({action: "remove", id: "ivgObAgshGaVSwf8LjasT"})
// invokeAction({action: "add", name: "Danylo", email: "test@gmail.com", phone:"12345"})

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse()

const option = program.opts()
invokeAction(option)
