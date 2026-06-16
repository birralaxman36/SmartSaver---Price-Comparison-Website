package Smartsaver.repository;

import Smartsaver.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository
        extends JpaRepository<Feedback,Integer> {
}