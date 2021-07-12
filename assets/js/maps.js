function initMap() {
    const myMap = {
        center: new google.maps.LatLng(22.2588, 114.1911),
        zoom: 11,
    };

const map = new google.maps.Map(document.getElementById("map"), myMap);

const myLocations = [{
  coords: {
    lat: 22.2759,
    lng: 114.1455
  },
  place: 'Victoria Peak Hike',
  info:   `<h4>Victoria Peak</h4>
  <p>A must-see spot in Hong Kong, The Peak is very popular thanks to its epic views of Victoria Harbour
   and the city itself. The easiest way to explore The Peak – other than visiting the lookout – is to take 
   an easy-going hour-long walk around the Peak. The Harlech Road and Lugard Road Circular Walk begin next 
   to Peak Tower, and it offers a 360-degree view of the city. The walk is flat and accessible by baby strollers too. 
   You may also want to visit in the evening to view Hong Kong’s iconic skyline at night. If your schedule allows, 
   pay a visit to Victoria Peak Garden which is a mere 10-minute walk from Peak Tower. This was the former residence 
   of the Governor of Hong Kong which has since been demolished, but the park remains as an attraction at the Peak.  </p>`
},

{

coords: {
  lat: 22.2369,
  lng: 114.2432
},
place: 'Dragons Back',
info:   `<h4>Dragons Back</h4>
<p>As one of the best urban hiking trails, Dragon’s Back is popular for good reason. 
It’s easily accessible and offers an impressive view of the Southern Island and coastline. 
The hike also ends at Big Wave Bay, so you can take a dip in the sea or have a relaxing 
meal at any of the beach-front restaurants. Start your hike at To Tei Wan on Shek O Road 
and follow the Hong Kong Trail to Shek O Peninsula Viewpoint. After that, continue to walk 
up until you reach an exposed platform on Shek O Peak where it opens up for a spectacular view 
of the coastline. Then, continue uphill to the Dragon’s Back view compass to look back at Tai Tam Bay 
and sometimes even Lamma Island on a sunny day. When you’re ready, you can start your descent and follow 
the signage to Hong Kong’s surfer paradise, Big Wave Bay. </p>`
},

{
coords: {
  lat: 22.2500,
  lng: 114.1984
},
place: 'Violet Hill Hike',
info:   `<h4>Violet Hill </h4>
<p> Loved by exercise enthusiasts, the Violet Hill and Twin Peak hike is located in the southern part of Hong Kong Island. 
Start slowly on Violet Hill and then get ready for the two famous mountain peaks, which have over a thousand steps, to enjoy 
sweeping views of Stanley. Following Wilson Trail, the path consists of dirt roads and steep stairs. The stairs may seem endless, 
but the rewarding view of Central, Tai Tam reservoir, Southern Island, and even Ocean Park, on the way makes it worth the sweat. 
When you’re finished with the hike, take a bus to Stanley and recharge with some well-deserved grub along the waterfront. </p>`
},

{
coords: {
  lat: 22.2533,
  lng: 113.9530
},
place: 'Sunset Peak Hike',
info:   `<h4>Sunset Peak</h4>
<p> Climb up to Hong Kong’s third-highest peak for the best natural evening view our city has to offer – one to add to your Hong Kong 
bucket list. Start this ambitious hike at Pak Kung Au, which leads you up the grassy Lantau Trail to a panoramic view from the aptly 
named Sunset Peak. As you ascend the highlands, enjoy the Lantau coastline, Pui O and explore the cluster of stone shacks (Lan Tau Ying) 
on the way. The romantic view at the summit will make the arduous climb more than worth it. From mid-October to early November, it’s silver 
grass season which results in a sea of silver grass that shines under the golden sunset hours. For those looking to catch the sunset, ensure 
you bring along sufficient lighting tools as it gets dark very quickly. It’s recommended to start the hike at (the latest) 3pm to ensure you 
have enough time to go back.  </p>`
},

{
  coords: {
    lat: 22.2000,
    lng: 114.1350
  },
  place: 'Lamma Island',
  info:   `<h4>Lamma Island</h4>
  <p>Lamma Island is the third largest island in Hong Kong and only a 30-minute ferry ride away from Central. It’s loved for its laid back vibes 
  and the many eateries which range from traditional Chinese seafood restaurants to modern cafes and bars. Take the ferry from Central Pier 4 and 
  you’ll arrive at Yung Shue Wan. From here, you can take some time to wander around the village. Once you pass the village, look out for signage 
  to Sok Kwu Wan and follow the signs to the Wind Power Station, Hong Kong’s first windmill. You can even make a stop to visit the exhibition centre 
  and learn its history. Continue the hike and you’ll arrive at Hung Shing Ye Beach, where you will find family-run stores, a designated barbecue area, 
  as well as toilets and bathing facilities if you wish to take a dip. Leave the beach and keep going uphill until you reach a pavilion which marks the 
  highest point of this hike. Keep walking and you will eventually reach Sok Kwu Wan, where there are a few seaview restaurants to enjoy. </p>`
  },
  {
    coords: {
      lat: 22.3000,
      lng: 114.2333
    },
    place: 'Devil Peak',
    info:   `<h4>Devil Peak</h4>
    <p>Devil’s Peak is situated next to the famous seafood market and fishing village Lei Yue Mun and gets its somewhat sinister name from the local pirate 
    occupants during the Ming Dynasty and the British Army in the 20th century that used it as an important nautical passage to Victoria Harbour. The remains 
    of a redoubt and batteries are still visible at Devil’s Peak. It’s worth taking a walk past the village to check out the Old Lei Yue Mun Quarry, an old stone 
    carving site in the 80s. The lighthouse, abandoned stone houses, and beautiful feather reed grass makes it a popular Instagram and photography spot. From there, 
    follow Wilson Trail to go up to Gough Battery, where you can see the gun pits, barracks, and a few historical buildings. From there, continue on Wilson Trail and 
    you’ll arrive at Devil's Peak Redoubt. Here, you’ll be able to wander around the trenches and enjoy the 270-degree view of Victoria Harbour. Aim to get here around 
    sunset to get the perfect shot.  </p>`
    },
    {
      coords: {
        lat: 22.2877,
        lng: 114.1365
      },
      place: 'Sai Wan Beach',
      info:   `<h4>Sai Wan Beach</h4>
      <p> This is a great hike that takes you to the beach paradise of Sai Kung. Tai Long Wan consists of a total of four bays, and this beginner’s hike will take you to 
      two of them – Tai Long Sai Wan (or Sai Wan) and Ham Tin Wan. If you’re interested, allow more time to visit the other two bays, Tai Wan and Tung Wan. Take a minibus 
      from Sai Kung city centre and get off at Sai Wan Pavilion, then take the Maclehose Trail section 2 on the right and in 30 minutes, you’ll arrive at Sai Wan, where the 
      walk is mostly flat and downhill. Enjoy the white sand beach and have lunch at one of the beachside restaurants. To get to Ham Tin Wan, follow the Maclehose trail and 
      in an hour or so, you will arrive at the second beach. Both beaches have small restaurants that offer camping tent rentals if you’d like to camp in the designated areas 
      on the beach. You can either hike back the same way, or take a speedboat back to Sai Kung town from Sai Wan or Ham Tin Wan.  </p>`
      },
      {
        coords: {
          lat: 22.2958,
          lng: 114.2858
        },
        place: 'High Junk Peak',
        info:   `<h4>High Junk Peak</h4>
        <p>One of the three sharpest peaks in Sai Kung, High Junk Peak is the most accessible one and offers a striking view of Clear Water Bay, Tung Long Island and Hong Kong 
        Island. At Ng Fai Tin, take the stairs next to the pavilion and start the hike along High Junk Peak Country Trail. Part of the trail is also a mountain bike trail which 
        is open on weekdays for mountain bikes, so please walk with care to avoid accidents. On the way up, you’ll see the urban landscape of Tseung Kwan O, and the serene coastline 
        of Sheung Sze Wan. At a forked junction, bear left and the peak is around 20 minutes climb away. The path here gets very steep and rocky, and there are points where you may 
        need to scramble up some big rocks. Once you’re at the top, enjoy the panoramic view of Clear Water Bay. Descend on the other side of the peak and walk through Tin Ha Shan. 
        On your way down, you’ll be able to see Po Toi O, a small fishing village, and the Clear Water Bay Golf and Country Club in the distance.  </p>`
        },
        {
          coords: {
            lat: 22.3193,
            lng: 114.1694
          },
          place: 'Thousand Island Lake',
          info:   `<h4>Thousand Island Lake</h4>
          <p> Often referred to as Thousand Island Lake, Tai Lam Chung Reservoir is the first reservoir built in Hong Kong after WWII. Today, these islands are one of the most scenic, 
          and therefore most Instagrammable, reservoirs in the city. Start your hike in So Kwun Wat Tsuen, a rural village in Tuen Mun, and then take a leisurely walk towards Maclehose 
          Trail Section 10 to the Viewpoint. There is signage along the road, follow that and you will shortly meet the Maclehose trail to continue on. The paved walk is mainly shaded and 
          the incline is moderate. It’s worth spending some time at the viewpoint to take photos, but it can get quite crowded on weekends so be patient while waiting to get that perfect shot. 
          To finish the hike, go the same way back, or continue on Maclehose trail and reach Tai Lam Country Trail, which leads you to Tai Lam Country Park, a popular spot for the sweet gum woods 
          in December.  </p>`
          },
          {
            coords: {
              lat: 22.3523,
              lng: 114.1870
            },
            place: 'Lion Rock',
            info:   `<h4>Lion Rock</h4>
            <p>Named after its resemblance to a Lion’s head, Lion Rock is considered to be one of Hong Kong’s most iconic hikes. Many Cantopop songs and TV shows have referenced Lion Rock as it is 
            said to embody the spirit of Hong Kong people. At its peak of 495m, hikers will have an unobstructed, 360-degree view of Kowloon and Hong Kong Island (south-facing) and New Territories 
            (north-facing). The hike has a moderate difficulty rating due to its initially steep inclined ascent with many stairs. The terrain has a mix of paved roads, make-shift staircases and 
            natural trails. The ascent has stretches of land where there are fewer tall trees to provide shade, so do remember to pack your sunscreen. After you enjoy the view at the top of the 
            mountain, the descent path has more shade to provide cover from the sun. The hike starts at Temple Hill Fat Jong Temple where you will see Shatin pass road. Follow that road until you 
            reach the Lion Rock Country Park entrance. This hike is very clearly labelled so simply follow the signs to the peak. On your descent, you’re going to want to follow the signs to Lion 
            Rock Park, which is the park located at the base of the mountain, where your hike ends. It’s a relatively short hike, but you’re going to want to take at least 1L of water per person, 
            to ensure you’re properly hydrated throughout the hike.  </p>`
            },
];

for (var i = 0; i < myLocations.length; i++) {
  addMarker(myLocations[i]);
}


function addMarker(props) {
  const marker = new google.maps.Marker({
    position: props.coords,
    map: map,
  });
  if (props.content) {
    const infowindow = new google.maps.InfoWindow({
      content: props.content
    });

    google.maps.event.addListener(marker, 'click', function () {
      if (!marker.open) {
        infowindow.open(map, marker);
        marker.open = true;
      }

      else {
        infowindow.close();
        marker.open = false;
      }
      google.maps.event.addListener(map, 'click', function () {
        infowindow.close();
        marker.open = false;
      });
    });
  }
}
}


