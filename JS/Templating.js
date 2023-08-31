document.addEventListener("DOMContentLoaded", function () {
  //___________Fetch the current innerHTML from containers_________//

  //.breakingNews container_______
  let templateBreakingNews = document.querySelector(".breakingNews").innerHTML;

  //.SideItem container____________
  let templateSideItem = document.querySelector(".SideItem").innerHTML;

  //.grid-container container____________
  let templateGridContainer = document.querySelector(".grid-container").innerHTML;


  //________________________JSON DATA______________________//

  //Breaking News Container
  const dataBreakingNews = {
    HeadlinesBreakingNews:
      "Microsoft Shares Plummet 30% in Unexpected Downturn: Investors and Analysts Left Stunned",

    BreakingNewsDetails:
      "Microsoft Shares Plummet 30% in Unexpected Downturn: Investors and Analysts Left Stunned",
  };

  //side item container
  const dataSideItem = {
    sideContainer:
      "Bitcoin spot Exchange Traded Funds (ETF) by Blackrock finally gets accepted by the SEC after a long battle",
  };

  const datagridcontainer = {
    title1: "Quantum Computing",
    title2: "Artificial Intelligence",
    title3: "Gadgets",
    title4: "Commentary",
    title5: "Networking",
    title6: "Gadgets"
    };
    

  //__________________________________________________________//

  //____________________RENDERING TEMPLATES___________________//

  // Render BreakingNews
  let renderedBreakingNews = Mustache.render(
    templateBreakingNews,
    dataBreakingNews
  );

  // Render the SideItem
  let renderedSideItem = Mustache.render(templateSideItem, dataSideItem);


  //Render grid-container
  let renderedGridContainer = Mustache.render(templateGridContainer, datagridcontainer);


  //____________________REPLACING HTML ELEMENTS_______________//

  document.querySelector(".breakingNews").innerHTML = renderedBreakingNews;

  document.querySelector(".SideItem").innerHTML = renderedSideItem;

  document.querySelector(".grid-container").innerHTML = renderedGridContainer;


  //____________________FOR DEBUGGING PURPOSES________________//

  console.log("Breaking News Mustache rendered:", renderedBreakingNews);
  console.log("Side Item Mustache rendered:", renderedSideItem);
});
