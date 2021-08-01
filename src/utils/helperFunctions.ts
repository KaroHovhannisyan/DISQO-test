export const generateId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const deepClone = <T>(data: T) => {
  return JSON.parse(JSON.stringify(data));
};

export const groupByDate = <T>(data: T[], forSeconds: number) => {
  const result = {};
  //@ts-ignore
  let timeDiff = new Date(data[0].created_at).getTime() + 5000;


  //@ts-ignore
  data.forEach((element, index) => {
      //@ts-ignore
    const dateInMiliSeconds = new Date(element.created_at).getTime();
      if (dateInMiliSeconds <=  timeDiff) {
            //@ts-ignore
        if(result[timeDiff]) {
            //@ts-ignore
            result[timeDiff].push(element);
        } else {
          //@ts-ignore
          result[timeDiff] = [element];
        }
      } else {
        timeDiff = dateInMiliSeconds + 5000;
        //@ts-ignore
        result[timeDiff] = [element];
      }
  });

  //@ts-ignore
  return Object.keys(result).map(date => ({date, data: result[date]}));
}
