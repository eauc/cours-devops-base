"use strict";

const app = require("../src/app.js");
const request = require("supertest")(app);

describe("Test server", function () {
	describe("/", function () {
		it("should return node version", function (done) {
			request.get("/")
				.expect(200, {
					version: "v6.10.3",
				})
				.end((err) => {
					done(err);
				});
		});
	});

	[
		{quote: "Allo, t'es une fille et t'as pas de shampoing, Allo, nan mais allo quoi?", author: "Nabilla"},
		{quote: "Là, c'est la guerre mondiale de 78 !", author: "Nabilla"},
		{quote: "Mon téléphone, c'est comme mon string, je l'ai toujours sur moi !", author: "Nabilla"},
		{quote: "A côté de Clara Morgane et Loana, moi je suis classe.", author: "Nabilla"},
		{quote: "Quand je ne connais pas, je ne me mélange pas. Les aigles ne volent pas avec les pigeons.", author: "Nabilla"},
		{quote: "Ce que je regarde en premier chez un mec, c'est le physique et le compte en banque !", author: "Nabilla"},
		{quote: "Je réalise mon rêve le jour de mon anniversaire : je ne sais pas quelle date on est !", author: "Nabilla"},
		{quote: "Va falloir mettre du piment dans les épinards", author: "Nabilla"},
		{quote: "Mais le Qatar, c'est un K", author: "Nabilla"},
		{quote: "Je skie super bien, j'ai eu des étoiles, même des étoiles filantes !", author: "Nabilla"},
		{quote: "Je trouve ça triste pour un président de pas avoir de buzz. Heu, je sais pas, faudrait qu'il fasse, je sais pas qu'il fasse un truc, une sextape... je sais pas un truc marrant, quoi.", author: "Nabilla"},
		{quote: "Elle est chelou, Carla Bruni, j'ai trouvé. Elle se fait filmer à rien faire de la journée...", author: "Nabilla"},
	].forEach((quote, i) => {
		describe(`/quotes/n/${i}`, function () {
			it(`should return quote #{i}`, function (done) {
				request.get(`/quotes/n/${i}`)
					.expect(200, quote)
					.end((err) => {
						done(err);
					});
			});
		});
	});
});
