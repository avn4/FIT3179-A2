Link to viz: https://avn4.github.io/FIT3179-A2/

Domain (why,who):

The domain sits under sports analytics and asks the question whether national wealth (measured by GDP per capita) translates to football power (high ranking where 1 is best). The goal is to help users spot patterns of wealth vs rank on the global scale and compare it by regions or country. Primary users are both football fans, students exploring the links between economics and sport and journalists who are seeking evidence for commentary. 

What (data):

Data used were FIFA Mens’ World Rankings from the offical FIFA website where annual ranks from 1993-2024 (grouped by semesters) were complied into a tidy CSV. Missing values were excluded as part of data cleaning process. GDP per capita (USD), World Bank national account, was also included so a comparison between football rankings and country gdp per capita could be made.

How:

<img width="675" height="312" alt="image" src="https://github.com/user-attachments/assets/adbba8f3-2e73-4340-bd92-4d22fd589aa6" />

The first idiom was the choropleth map with rank bands. This feature provided immediate global context to the user, allowing them to locate the strongest team clusters and determine the dominance these countries had over the years by adjusting the year and semester using a slider. Also, through the help of the slider, users were able to identify emerging countries as their ranks improved or countries that stagnated. 

<img width="451" height="319" alt="image" src="https://github.com/user-attachments/assets/4ba6b07e-8277-410d-bca1-5ed621a6d317" />

The scatterplot best illustrated the relationship between wealth and performance, which helped users identify whether there was a positive, negative, or no trend. Howevering over a point allowed users to identify the country, its GDP and FIFA rank. 

<img width="721" height="424" alt="image" src="https://github.com/user-attachments/assets/a915d4af-b558-4743-8baf-1eae3d524f00" />

The line chart captures how performance evolves despite differences in GDP per capita. The consistency and uptrend trajectory of lower GDP per capita countries shows that the countries national football team is just as competent (if not more competent) than countries with high GDP per capita such as Spain. Using small multiples allow users to quickly compare different trajectories of different countreis without visual clutter. 

<img width="383" height="329" alt="image" src="https://github.com/user-attachments/assets/275b23d0-43df-4bb9-ab62-d7d909d73e05" />

The stacked format makes it easier to compare the proportion of top 10 to top 101 teams on each gdp per capita group. Users can immediately see that countries with higher gdp per capita house more national football teams within the top 10 than countries within the 0-25k gdp per capita. However, lower income groups can also host top 25 teams which reinforces the idea that money certainly helps, but is not the dominating factor. Lastly, the stacked proportion bar chart bridges qualitative observations from the scatterplot with quantitative proportions.


