//priority: 566
ServerEvents.loaded(event=>{
    //小麦の価値
    const data= event.server.persistentData
    const Val =data.getInt('Value')
    if (Val===null||Val<=1) {
        data.putInt('Value',1)
    }
    //ランダムティックスピード
    const spd=data.getInt('Speed')
    if (spd===null||spd<=1) {
        data.putInt('Speed',3)
    }
})


ItemEvents.rightClicked('minecraft:wheat', event=>{
    const mainIS =event.getItem();
    const mainISCount = mainIS.getCount()
    console.info(mainISCount)
    if(event.level.isClientSide()== false){
        const data = event.server.persistentData
        const value = data.getInt('Value')
        const count = data.getFloat('WheatAmo') + value*mainISCount
        data.putFloat('WheatAmo', count)
        console.info(data.getFloat('WheatAmo'))
        mainIS.shrink(mainISCount)
    }
})
//小麦数を表示
ServerEvents.tick(event=>{
    event.server.runCommandSilent('title @a actionbar [{"text":"YOU HAVE ","color":"#ffff80"},{"text":"'+event.server.persistentData.getFloat('WheatAmo')+'","color":"#80ffff"},{"text":" Wheats","color":"#ffff80"}]')
    event.server.runCommandSilent('gamerule randomTickSpeed '+event.server.persistentData.getInt('Speed'))
})

//小麦の価値
ItemEvents.rightClicked(event=>{
    const data= event.server.persistentData
    const Val =data.getInt('Value')
    const wheat_amo=data.getFloat('WheatAmo')
    const has_item = event.getItem().getId()
    function val_ups(itemid,up_amo,consume) {
    if (Val<=up_amo-1&&has_item==itemid&&consume<=wheat_amo) {
        data.putFloat('WheatAmo', wheat_amo-consume)
        data.putInt('Value',up_amo)
        event.getItem().shrink(1)
        event.server.runCommandSilent("execute as @a at @s run playsound minecraft:entity.player.levelup")
        event.player.tell('The value of wheat rose to '+up_amo+".")
    } 
    else {
        if(has_item!=itemid)return
        if(Val>=up_amo){
            event.player.tell('You have already had this upgrade.')
            return
        }
        if(consume>wheat_amo){
            event.player.tell("You don't have enough wheats. You need "+consume+" wheats.")
        }
    }
    }
    val_ups('kubejs:val_up_1',2,10)
    val_ups('kubejs:val_up_2',4,50)
    val_ups('kubejs:val_up_3',8,200)
    val_ups('kubejs:val_up_4',32,1500)
    val_ups('kubejs:val_up_5',256,15000)
    val_ups('kubejs:val_up_6',1024,300000)

    //ランダムティックスピード
    const spd =data.getInt('Speed')
    function spd_ups(itemid,up_amo,consume) {
    if (spd<=up_amo-1&&has_item==itemid&&consume<=wheat_amo) {
        data.putFloat('WheatAmo', wheat_amo-consume)
        data.putInt('Speed',up_amo)
        event.getItem().shrink(1)
        event.server.runCommandSilent("execute as @a at @s run playsound minecraft:entity.player.levelup")
        event.player.tell('The random tick speed rose to '+up_amo+".")
    } 
    else {
        if(has_item!=itemid)return
        if(spd>=up_amo){
            event.player.tell('You have already had this upgrade.')
            return
        }
        if(consume>wheat_amo){
            event.player.tell("You don't have enough wheats. You need "+consume+" wheats.")
        }
    }
    }
    spd_ups('kubejs:spd_up_1',30,100)
    spd_ups('kubejs:spd_up_2',120,10000)
    spd_ups('kubejs:spd_up_3',3000,150000)

    if (has_item=="kubejs:wheat_king"&&wheat_amo>=1000000) {
        event.server.runCommandSilent("execute as @a at @s run playsound minecraft:entity.player.levelup")
        event.server.runCommandSilent('title @a title "You Are Wheat KING"')
        event.server.runCommandSilent("execute as @a at @s run playsound minecraft:ui.toast.challenge_complete")
        event.player.tell('Congratulation!')
        event.player.tell('You collect 1,000,000 Wheats.')
        event.player.tell('Thank you for playing.')
    } 
    else {
        if(has_item!="kubejs:wheat_king")return
        if(1000000>wheat_amo){
            event.player.tell("You don't have enough wheats. You need 1000000 wheats to become Wheat KING.")
        }
    }
    
})



ItemEvents.rightClicked('minecraft:blue_glazed_terracotta',event=>{
    event.server.persistentData.putInt('Value',1)
})