<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class GameController extends AbstractController{

    #[Route('/flappyBird')]
    public function gameFlappyBird(){
        return $this->render('flappyBird.html.twig');
    }
}