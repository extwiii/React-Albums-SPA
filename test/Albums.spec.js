const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const should = chai.should();

chai.use(chaiHttp);
describe('Albums Server', () => {
  it('GET request should get 200 status code from /api/albums', (done) => {
    chai.request(server)
      .get('/api/albums')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('GET request should get 200 status code from /api/albums/:id', (done) => {
    chai.request(server)
      .get('/api/albums/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('GET request should list ALL albums on /api/albums', (done) => {
    chai.request(server)
      .get('/api/albums')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body[0].should.have.property('id');
        res.body[0].id.should.equal(1);
        res.body[0].should.have.property('album');
        res.body[0].album.should.equal('Wormfood');
        res.body[0].should.have.property('artist');
        res.body[0].artist.should.equal('Jamaican Queens');
        res.body[0].should.have.property('image');
        res.body[0].image.should.equal('http://ecx.images-amazon.com/images/I/518ftpGCSJL._SL500_AA280_.jpg');
        res.body[0].should.have.property('release_date');
        res.body[0].release_date.should.equal(1362459600000);
        res.body[0].should.have.property('soundcloud');
        res.body[0].soundcloud.should.equal('https://soundcloud.com/jamaicanqueens/sets/wormfood');
        res.body[0].should.have.property('bandcamp');
        should.not.exist(res.body[0].bandcamp);
        res.body[0].should.have.property('rdio');
        res.body[0].rdio.should.equal('http://rd.io/x/QFq_PmvjdQ/');
        res.body[0].should.have.property('twitter');
        res.body[0].twitter.should.equal('JamQueens');
        res.body[0].should.have.property('description');
        res.body[0].description.should.equal('Some years you just know from the first listen that this will be the Album of the Year. It was like that for Jamaican Queens this year. Their debut album blew me away and every time I go back to it I love it even more. The last 3 mins of the album are absolutely sublime. Eagerly looking forward to seeing these guys live and their next album.');
        done();
      });
  });

  it('GET request should list ALL albums on /api/albums/:id', (done) => {
    chai.request(server)
      .get('/api/albums/4')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.id.should.equal(4);
        res.body.should.have.property('album');
        res.body.album.should.equal('Heza');
        res.body.should.have.property('artist');
        res.body.artist.should.equal('Generationals');
        res.body.should.have.property('image');
        res.body.image.should.equal('http://ecx.images-amazon.com/images/I/51b5l0IcYkL._SL500_AA280_.jpg');
        res.body.should.have.property('release_date');
        res.body.release_date.should.equal(1364875200000);
        res.body.should.have.property('soundcloud');
        should.not.exist(res.body.soundcloud);
        res.body.should.have.property('bandcamp');
        should.not.exist(res.body.bandcamp);
        res.body.should.have.property('rdio');
        res.body.rdio.should.equal('http://rd.io/x/QFq_PmRQlg/');
        res.body.should.have.property('twitter');
        res.body.twitter.should.equal('generationals');
        res.body.should.have.property('description');
        res.body.description.should.equal('Generationals\' last album was my top album of 2011. This album picks up where that one left off. Every song is great. It\'s just pure indie pop goodness that always puts me in a good mood whenever I listen to it.');
        done();
      });
  });
});
