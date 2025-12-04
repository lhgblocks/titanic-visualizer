export function getTableData(json) {
  return json;
}

export function getLineChartData(json) {
    // Filter only valid entries
    const valid = json.filter(
      (item) => item.Age !== null && item.Fare !== null
    );
  
    // Group by 10-year age bins
    const groups = {};
  
    valid.forEach((item) => {
      const bucket = Math.floor(item.Age / 10) * 10;
      const label = `${bucket}-${bucket + 9}`;
  
      if (!groups[label]) {
        groups[label] = { totalFare: 0, count: 0 };
      }
  
      groups[label].totalFare += item.Fare;
      groups[label].count += 1;
    });
  
    // Convert groups into final array
    const result = Object.entries(groups)
      .map(([label, { totalFare, count }]) => ({
        ageGroup: label,
        fare: Number((totalFare / count).toFixed(2)),
      }))
      .sort((a, b) => {
        const aStart = parseInt(a.ageGroup.split("-")[0], 10);
        const bStart = parseInt(b.ageGroup.split("-")[0], 10);
        return aStart - bStart;
      });
  
    return result;
  }

export function getHistogramData(json) {
  const survivorsByClass = { 1: 0, 2: 0, 3: 0 };

  json.forEach((item) => {
    if (item.Survived === 1 && item.Pclass != null) {
      survivorsByClass[item.Pclass] = (survivorsByClass[item.Pclass] || 0) + 1;
    }
  });

  return [
    { pclass: 1, survivors: survivorsByClass[1] },
    { pclass: 2, survivors: survivorsByClass[2] },
    { pclass: 3, survivors: survivorsByClass[3] },
  ];
}

