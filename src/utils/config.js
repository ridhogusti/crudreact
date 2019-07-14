const data = {
  section: location.href
    .split("//")[1]
    .split("/")[1]
    .split("?")[0]
};

export default data;
