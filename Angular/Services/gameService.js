angular
  .module("spaceApp")
  .service("gameService", function ($http) {

    var _photos = []

    var Photo = function (id, location, name, question) {
      this.id = id;
      this.location = location;
      this.name = name;
      this.question = question;
    }

    _photos.push(new Photo(1, "../Photos/mars_real.jpg", "Real", "Everybody should know their neighbors. Can you pick out Mars?"))
    _photos.push(new Photo(1, "../Photos/mars_fake.jpg", "Fake", "Everybody should know their neighbors. Can you pick out Mars?"))
    _photos.push(new Photo(2, "../Photos/saturn_real.jpg", "Real", "One of these is an incredible photograph. The other is incredible cgi. Pick the photograph."))
    _photos.push(new Photo(2, "../Photos/saturn_fake.jpg", "Fake", "One of these is an incredible photograph. The other is incredible cgi. Pick the photograph."))
    _photos.push(new Photo(3, "../Photos/pluto_real.jpg", "Real", "Can you identify the dwarf planet, Pluto?"))
    _photos.push(new Photo(3, "../Photos/pluto_fake.jpg", "Fake", "Can you identify the dwarf planet, Pluto?"))
    _photos.push(new Photo(4, "../Photos/sun_real.jpg", "Real", "Avoid the painting and choose the photograph."))
    _photos.push(new Photo(4, "../Photos/sun_fake.jpg", "Fake", "Avoid the painting and choose the photograph."))
    _photos.push(new Photo(5, "../Photos/eagle_real.jpg", "Real", "Does the Eagle Eye Nebula contain the Pillars of Creation, or is that backwards? Pick the bigger structure."))
    _photos.push(new Photo(5, "../Photos/eagle_fake.jpg", "Fake", "Does the Eagle Eye Nebula contain the Pillars of Creation, or is that backwards? Pick the bigger structure."))
    _photos.push(new Photo(6, "../Photos/olympus_mons_fake.jpg", "Fake", "Who climbs higher? Mt. Everest or Mars' Olympus Mons?"))
    _photos.push(new Photo(6, "../Photos/olympus_mons_real.jpg", "Real", "Who climbs higher? Mt. Everest or Mars' Olympus Mons?"))
    _photos.push(new Photo(7, "../Photos/enceladus_real.jpg", "Real", "Select Enceladus. Not the human egg cell."))
    _photos.push(new Photo(7, "../Photos/enceladus_fake.jpg", "Fake", "Select Enceladus. Not the human egg cell."))
    _photos.push(new Photo(8, "../Photos/io_fake.jpg", "Fake", "Avoid the cheese wheel and select Saturn's moon, Io."))
    _photos.push(new Photo(8, "../Photos/io_real.jpg", "Real", "Avoid the cheese wheel and select Saturn's moon, Io."))
    _photos.push(new Photo(9, "../Photos/jupiter_fake.jpg", "Fake", "Use your marbles and select the planet Jupiter."))
    _photos.push(new Photo(9, "../Photos/jupiter_real.jpg", "Real", "Use your marbles and select the planet Jupiter."))
    _photos.push(new Photo(10, "../Photos/eva_fake.jpg", "Fake", "NASA Officer James Voss or Sandra Bullock? Choose the one that truly escaped Gravity."))
    _photos.push(new Photo(10, "../Photos/eva_real.jpg", "Real", "NASA Officer James Voss or Sandra Bullock? Choose the one that truly escaped Gravity."))

    this.getPhotos = function() {
      return _photos
    }

  })