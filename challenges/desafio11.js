db.trips.aggregate([
  {
    $addFields: {
      start_day_of_week: { $dayOfWeek: "$startTime" },
    },
  },
  { $group: { _id: "$start_day_of_week", total: { $sum: 1 } } },
  { $project: { _id: 0, total: 1, dia_da_semana: "$_id" } },
]);
// db.trips.aggregate([
//   { $match: { $expr: { $eq: [{ $dayOfWeek: "$startTime" }, 5] } } },
//   { $group: { _id: "$startStationName", allTrips: { $sum: 1 } } },
//   { $project: { _id: 0, nomeEstacao: "$_id", total: "$allTrips" } },
//   { $sort: { total: -1 } },
//   { $limit: 1 },
// ]);

