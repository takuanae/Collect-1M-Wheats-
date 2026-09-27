ServerEvents.recipes(event=>{
    event.shapeless(Item.of("minecraft:bread"),
    ['3x minecraft:wheat']
    )
    event.shapeless(Item.of("minecraft:wheat"),
    ['3x minecraft:wheat_seeds']
    )
})