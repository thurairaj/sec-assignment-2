## Requirement

1. Please create a layout as shown in Figure 1. 
    1. Current temperature should be shown in a prominent location followed by a list of hourly temperatures. 
    2. Follow similar pattern for wind speed and precipitation 

2. Use the following url to fetch weather data. 
    1. https://api.open-meteo.com/v1/forecast?latitude=[latitude]&longitude=[longitude]&current=temperature_2m,precipitation,wind_speed_10m&hourly=temperature_2m,precipitation,wind_speed_10m&forecast_days=1
    2. Substitute latitude and longitude values based on the user's value in the input box.
    3. Change to the latest temperature every time the user clicks the Submit button. 

3. Starter code can be found at https://github.com/thurairaj/sec-assignment-2/tree/main/assignment-2 but feel free to start from scratch. 

## Submission Method
1. Post your code in github. 
2. Create new repo in github
3. Go to your terminal / command prompt
4. git clone [url]
5. npx create-next-app@latest
6. Send your github repo link to thurairaj92@gmail.com
7. Due Date: 11th May 2024

