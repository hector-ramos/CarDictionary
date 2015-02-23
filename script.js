document.title = 'Search Project Assignment';

var body = document.body,
	doc  = document,
	glossary = [
		{
			term: 'Ford',
			desc: 'Henry Ford\'s first vehicle rode on four bicycle wheels and was powered by a four-horsepower engine. Instead of a steering wheel, the Quadricycle had a tiller. The gearbox had only two forward gears with no reverse.'
		},{
			term: 'Chevrolet',
			desc: 'Is an American automobile division of the American manufacturer General Motors (GM). Louis Chevrolet and ousted General Motors founder William C. Durant started the company on November 3, 1911 as the Chevrolet Motor Car Company.'
		},{
			term: 'Ferrari',
			desc: 'Is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1929, as Scuderia Ferrari, the company sponsored drivers and manufactured race cars before moving into production of street-legal vehicles as Ferrari S.p.A. in 1947.'
		},{
			term: 'Lamborghini',
			desc: 'Is an Italian brand and manufacturer of luxury sports cars and, formerly, SUVs, which is owned by the Volkswagen Group through its subsidiary brand division Audi.'
		},{
			term: 'BMW',
			desc: 'BMW is headquartered in Munich, Bavaria. It also owns and produces Mini cars, and is the parent company of Rolls-Royce Motor Cars. BMW produces motorcycles under BMW Motorrad. In 2012, the BMW Group produced 1,845,186 automobiles and 117,109 motorcycles across all of its brands. BMW is part of the "German Big 3" luxury automakers, along with Audi and Mercedes-Benz, which are the three best-selling luxury automakers in the world.'
		},{
			term: 'Yamaha',
			desc: 'Is a Japanese multinational corporation and conglomerate based in Japan with a very wide range of products and services, predominantly musical instruments, electronics, motorcycles and power sports equipment.'
		},{
			term: 'Suzuki',
			desc: 'Is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu, Japan, which specializes in manufacturing automobiles, four-wheel drive vehicles, motorcycles, all-terrain vehicles (ATVs), outboard marine engines, wheelchairs and a variety of other small internal combustion engines. In 2011, Suzuki was thought to be the tenth biggest automaker by production worldwide. Suzuki has over 45,000 employees worldwide and has about 35 main production facilities in 23 countries and 133 distributors in 192 countries.'
		},{
			term: 'Honda',
			desc: 'Is a Japanese public multinational corporation primarily known as a manufacturer of automobiles, motorcycles and power equipment.'
		},{
			term: 'Toyota',
			desc: 'is a Japanese automotive manufacturer headquartered in Toyota, Aichi, Japan. In March 2014 the multinational corporation consisted of 338,875 employees worldwide and, as of November 2014, is the twelfth-largest company in the world by revenue. Toyota was the largest automobile manufacturer in 2012 (by production) ahead of the Volkswagen Group and General Motors. In July of that year, the company reported the production of its 200-millionth vehicle. Toyota is the world\'s first automobile manufacturer to produce more than 10 million vehicles per year. It did so in 2012 according to OICA, and in 2013 according to company data. As of July 2014, Toyota was the largest listed company in Japan by market capitalization (worth more than twice as much as #2-ranked SoftBank) and by revenue.'
		},{
			term: 'Mitsubishi',
			desc: 'Is a group of autonomous Japanese multinational companies covering a range of businesses which share the Mitsubishi brand, trademark, and legacy.'
		},
	];

// [for url etc.....] ::start
var toSlug = function(str){
    slug = str.toLowerCase().replace(/\W+/g, '-').replace(/^-|-$/g, '');
    return slug;
};
// [for url etc.....] ::end


//add your variables here
var div = document.createElement('div');
var section = document.createElement('section');
var section2 = document.createElement('section');
var h1 = document.createElement('h1');
var h2 = document.createElement('h2');
var form = document.getElementById('search-form');
var ul = document.createElement('ul');
h1.textContent = 'My Glossary'
div.id = 'main-content'
ul.className = 'glossary-list';
section.className = 'left-content col-item col-1';
section2.className = 'right-content col-item col-2';

//append section
section.appendChild(h1);
section2.appendChild(h2);
section.appendChild(form);
section.appendChild(ul);
div.appendChild(section);
div.appendChild(section2);
document.body.insertBefore(div, document.body.lastChild);


// iteration
// to view the list on the index.html
for(var i = 0; i < glossary.length; i++){
    var li = document.createElement('li');
    var a = document.createElement('a');
    var p = document.createElement('p');
    a.href = '#' + toSlug(glossary[i].term);
    a.textContent = glossary[i].term;
    a.setAttribute('data-description', glossary[i].desc);
    li.appendChild(a);
    ul.appendChild(li);

    ul.addEventListener('click', function(e){
        var target = e.target;
        if (target.nodeName.toLowerCase() === 'a'){
        	h2.textContent = target.textContent;
            document.title = target.textContent + ' | Search Project Assignment';
        	section2.appendChild(p);
            p.textContent = target.data-description;
        }
    });
}
