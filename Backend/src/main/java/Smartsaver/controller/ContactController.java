package Smartsaver.controller;

import Smartsaver.entity.Contact;
import Smartsaver.repository.ContactRepository;
import org.springframework.web.bind.annotation.*;


@RestController
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(
            ContactRepository contactRepository){

        this.contactRepository =
                contactRepository;
    }

    @PostMapping("/contact")
    public Contact saveContact(
            @RequestBody Contact contact){

        return contactRepository.save(contact);
    }
}