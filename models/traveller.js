const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function (location) {
  return this.journeys.map(function (journey){
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(function (journey) {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const findByTransport = this.journeys.filter(journey => journey.transport === transport);
  return findByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const findByDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  return findByDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce(function (total, journey) {
    return total += journey.distance
  }, 0)
  };

  Traveller.prototype.getUniqueModesOfTransport = function () {
    return this.journeys.map((journey) => {
      return journey.transport;
    })
    .filter((transport, index, array) => {
      return array.indexOf(transport) === index;
    });
  };


module.exports = Traveller;
