db.trips.aggregate([
  {
    $match: {
      $and: [{ birthYear: { $exists: true } }, { birthYear: { $ne: "" } }],
    },
  },
  {
    $group: {
      _id: "",
      maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
      menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
    },
  },
  {
    $project: {
      _id: 0,
      maiorAnoNascimento: 1,
      menorAnoNascimento: 1,
    },
  },
]);
