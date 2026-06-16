package Smartsaver.controller;

import Smartsaver.entity.Feedback;
import Smartsaver.repository.FeedbackRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class FeedbackController {

    private final FeedbackRepository feedbackRepository;

    public FeedbackController(
            FeedbackRepository feedbackRepository){

        this.feedbackRepository =
                feedbackRepository;
    }

    @PostMapping("/feedback")
    public Feedback saveFeedback(
            @RequestBody Feedback feedback){

        return feedbackRepository.save(feedback);
    }
}