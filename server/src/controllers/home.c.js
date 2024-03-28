// controllers/home.c.js

class HomeController {
  getHomePage = async (req, res) => {
    //res.status(200).json({ message: 'Hello world!' });
    res.render('home');
        }  
}

module.exports = new HomeController()
