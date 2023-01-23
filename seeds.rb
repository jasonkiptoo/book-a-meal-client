# Clear existing data
puts "seeding data.."
puts "Cleaning database"
Meal.delete_all
Category.delete_all
# CategoryMeal.delete_all

# Create categories
puts 'generating categories'

Category.create(name:"Main Meals", image_url:"https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")
Category.create(name:"Drinks", image_url:"https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80")
Category.create(name:"Dessert", image_url:" https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")
Category.create(name:"Salads", image_url:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
Category.create(name:"Light Bites", image_url:"https://images.unsplash.com/photo-1504937551116-cb8097e6f02a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80")

# Create meals
puts 'generating meals'
Meal.create(name: "Spaghetti Bolognese", description: "A classic dish of spaghetti pasta with a rich meat sauce made of ground beef, tomatoes, onions, and spices.", price: 12.99, image_url: "https://www.example.com/spaghetti-bolognese.jpg", category_id: "Italian")
Meal.create(name: "Chicken", description:"This roasted cantaloupe cookie is utterly grainy with a crunchy texture. It indicates sesame seed with anise and has sweet woodruff. It smells savory with a large amount of couscous. It is exquisite. You can really feel how unsulfured and how alkaline it is.", price:20, image_url: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMG9uJTIwYSUyMHBsYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", category_id:1)
Meal.create(name: "African Pure", description: "This poached fiddleheads salad is quite soft with a crusty texture. It indicates spelt with caraway seed and has a large amount of black cumin. It smells like a laundry hamper with an overwhelming amount of rose hips. It is warm and pleasant. You can really feel how locally sourced and how low salt it is.", price: 5, image_url: "https://images.unsplash.com/photo-1504670555658-db8fb2e908ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", category_id:1)
Meal.create(name: "Fries", description:"This braised quinoa wrap is quite soft with a delicate texture. It is vaguely reminiscent of daikon with saffron and has saffron. It smells sharp with longans. It is odd but winsome. You can really feel how 0g of added sugar and how quality guaranteed it is.", price: 25, image_url:"https://plus.unsplash.com/premium_photo-1661668648046-f2bc1091e4b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoaWNrZW4lMjBvbiUyMGElMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", category_id:1)
Meal.create(name:"Beef Chapati", description: "This smoked carambola bowl is completely mushy with a flaky texture. It is nothing like mandarin with pumpkin spice and has a hint of pennyroyal. It smells like a dog with a hint of thyme. It is harsh and sooty. You can really feel how BPA-free and how alkaline it is.", price: 25, image_url:"https://images.unsplash.com/photo-1513950725771-b9116d3651ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNoaWNrZW4lMjBvbiUyMGElMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", category_id:5)
Meal.create(name:'choma', description:"This infused pistachios brunch is kind of doughy with an airy texture. It is infused with durian with cicely and has milk thistle. It smells stinky with Brussels sprout. It is new and enjoyable. You can really feel how quality guaranteed and how no fillers it is.", price: 12, image_url:"https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNoaWNrZW4lMjBvbiUyMGElMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", category_id:1)
Meal.create(name:"Pineapple juice", description:"This marinated pearl millet turnover is moderately electric with a silky texture. It compares to barley with myrtle plant and has foxglove. It smells like acetone with just the right amount of crabapples. It is vaguely Moorish. You can really feel how unsweetened and how fresh cut it is.", price: 8, image_url:"https://images.unsplash.com/photo-1633531138911-1dffbaa8d65d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8anVpY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", category_id:2)
Meal.create(name:"Watermelon", description: "This fried butternut squash broth is a shade crispy with a succulent texture. It indicates pitanga with bayberry and has laurel. It smells wholesome with java-plum. It is strong and sinister. You can really feel how low salt and how non-GMO it is.", price:6, image_url:"https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1aWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", category_id:1)
Meal.create(name:"Oreo Milkshake ", description: "This poached arrowroot dumpling is slightly greasy with a syrupy texture. It has characteristics of cranberries with bay and has a lot of lemon verbena. It smells bland with rice. It is delicious with character. You can really feel how whole food and how high in potassium it is.", price: 9, image_url:"https://images.unsplash.com/photo-1619158401201-8fa932695178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGp1aWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", category_id:1)
Meal.create(name:"Blueberry Milkshake", description: "This blanched hanza dumpling is relatively grainy with a fizzy texture. It is nothing like grapes with sweet grass and has a lot of nutmeg. It smells decaying with yambean (jicama). It is decidedly celtic. You can really feel how no artificial sweeteners and how vegan it is.", price:9, image_url:"https://images.unsplash.com/photo-1588929473475-d16ffd5d068c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1pbGtzaGFrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", category_id: 1)
Meal.create(name:"avocado salad", description:"This sauteed butternut squash muffin is relatively honeyed with a fluffy texture. It mirrors java-plum with sweet cicely and has stevia. It smells like licorice with just the right amount of pickles. It is strangely primitive. You can really feel how high fiber and how no preservatives it is.", price:3, image_url:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", category_id:4)
Meal.create(name: "salad ", description:"Steamed trout with zatar and blueberries. Served with goose soup, salted mild cheddar, draught beer, rolls with jam and poached eggs 2", price: 3, image_url:"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", category_id:4)
Meal.create(name:"Salad milo", description:"Simmered mole with pomegranates and mockernuts on a bed of diced sea lettuce, sliced wakame and blackberries. Served with stag and rutabaga soup, poached eggs, peanut pie and gouda. 3", price:3, image_url:"https://images.unsplash.com/photo-1503146234394-631200675614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", category_id:4)


Meal.create(name:"Salad", description:"Baked brown rice with ricotta, lentil, winter purslane and banana. Served with colby, indian pea and gooseberry soup, focaccia, cocktails and kurrajong nut pie.", price:3, image_url:"https://images.unsplash.com/photo-1468777675496-5782faaea55b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", category_id:4)
Meal.create(name:"Tiramisu", description:"Salted werewolf rib with pepper and bananas with a salad of sauteed florence fennel, sauteed endive and dates. Served with cocktails, brined mozzarella, lavash and fried eggs.", price:5, image_url:"https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", category_id:3)
Meal.create(name:"Almond and date cake ", description:"Steamed white rice with vulture, coyote, kurrajong nut and grapefruit with a side of cooked lagos bologi, beetroot and blueberries.", price:5, image_url:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", category_id:3)
Meal.create(name:"Choc a block  ", description:"desert", price:6, image_url:"https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", category_id:3)
Meal.create(name:"Chocolate & mint cheesecake", description:"Choc a block
   ", price:4, image_url:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", category_id:3)
Meal.create(name:"Chocolate banoffee pie", description:"Chocolate banoffee pie", price:5, image_url:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", category_id:3)
Meal.create(name:"light bite 1", description:"light bite 1", price:8, image_url:"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3Nhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", category_id:5)
Meal.create(name:"light bite 2", description:"light bite 3", price:7, image_url:"https://images.unsplash.com/photo-1560717844-57e41a5e4758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", category_id:5)
Meal.create(name:"light bite 3", description:"light bite 3", price:9, image_url:"https://images.unsplash.com/photo-1593870682262-8c9f6a9bb225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", category_id:5)
Meal.create(name:"light bite 4", description:"light bite 4", price:8, image_url:"https://images.unsplash.com/photo-1542384557-0824d90731ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", category_id:5)


# # Create orders
# puts 'generating orders'
# 10.times do
#   Order.create(
#     total_prize: Faker::Commerce.price,
#     status: Faker::Boolean.boolean,
#     order_id: Faker::Number.number(digits: 8),
#     user_id: Faker::Number.between(from: 1, to: 5)
#   )
# end


# Create meals of the day
puts 'generating meals of the day'
MealsOfTheDay.create(meal_id: 1, expires_at: Faker::Time.between(from: DateTime.now, to: DateTime.now + 7.days) )
MealsOfTheDay.create(meal_id: 2, expires_at: Faker::Time.between(from: DateTime.now, to: DateTime.now + 7.days) )
MealsOfTheDay.create(meal_id: 3, expires_at: Faker::Time.between(from: DateTime.now, to: DateTime.now + 7.days) )
MealsOfTheDay.create(meal_id: 1, expires_at: Faker::Time.between(from: DateTime.now, to: DateTime.now + 7.days) )
MealsOfTheDay.create(meal_id: 1, expires_at: Faker::Time.between(from: DateTime.now, to: DateTime.now + 7.days) )
MealsOfTheDay.create(meal_id: 1, expires_at: Faker::Time.between(from: DateTime.now, to: DateTime.now + 7.days) )


puts 'done'


