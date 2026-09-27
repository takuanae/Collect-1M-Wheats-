// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')
StartupEvents.registry('item',event=>{
    event.create('val_up_1').displayName('Wheats Value Upgrade 1')
    event.create('val_up_2').displayName('Wheats Value Upgrade 2')
    event.create('val_up_3').displayName('Wheats Value Upgrade 3')
    event.create('val_up_4').displayName('Wheats Value Upgrade 4')
    event.create('val_up_5').displayName('Wheats Value Upgrade 5')
    event.create('val_up_6').displayName('Wheats Value Upgrade 6')
    event.create('spd_up_1').displayName('Wheats Grow Speed Upgrade 1')
    event.create('spd_up_2').displayName('Wheats Grow Speed Upgrade 2')
    event.create('spd_up_3').displayName('Wheats Grow Speed Upgrade 3')
    event.create('wheat_king').displayName('Proof of Wheat KING')
})