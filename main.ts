function right () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 25)
    neZha.setMotorSpeed(neZha.MotorList.M2, -25)
}
function 自动后退 (数字: number) {
    backward()
    basic.pause(数字)
    stop()
    basic.pause(100)
}
function 左转直到压线 () {
    left()
    basic.pause(200)
    while (true) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
            stop()
            basic.pause(100)
            break;
        } else {
            left()
        }
    }
    while (true) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
            stop()
            basic.pause(100)
            break;
        } else {
            left()
        }
    }
}
function 中2 () {
    松()
    自动后退(500)
    左转直到压线()
    巡线到全黑停止()
    自动前进(300)
    右转直到压线()
    巡线到全黑停止()
    自动前进(300)
    左转直到压线()
    巡线到全白停止()
    夹()
    自动前进(300)
    左转直到压线()
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(300)
    }
    右转直到压线()
    巡线到全白停止()
    松()
}
function 基础巡线 () {
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_3)) {
        right()
    } else if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.TrackingStateType.Tracking_State_3)) {
        left()
    } else {
        forward()
    }
}
function 下A2 () {
    自动后退(500)
    for (let index = 0; index < 2; index++) {
        左转直到压线()
    }
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(300)
    }
    右转直到压线()
    巡线到全白停止()
    夹()
    自动后退(400)
    右转直到压线()
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(300)
    }
    左转直到压线()
    巡线到全白停止()
    松()
}
function 自动前进 (数字: number) {
    forward()
    basic.pause(数字)
    stop()
    basic.pause(100)
}
function left () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -25)
    neZha.setMotorSpeed(neZha.MotorList.M2, 25)
}
function stop () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        上1()
        中1()
        下A1()
        下B1()
        下C1()
        下C2()
        下B2()
        下A2()
        中2()
        上2()
        上2()
    }
})
function 下A1 () {
    自动后退(200)
    左转直到压线()
    巡线到全黑停止()
    自动前进(300)
    右转直到压线()
    巡线到全黑停止()
    自动前进(300)
    左转直到压线()
    巡线到全黑停止()
    自动前进(300)
    左转直到压线()
    巡线到全白停止()
    夹()
    自动后退(500)
    左转直到压线()
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(300)
    }
    右转直到压线()
    巡线到全白停止()
    松()
}
function 夹 () {
    // 夹
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 30)
    basic.pause(200)
}
function 下B1 () {
    自动后退(400)
    右转直到压线()
    巡线到全白停止()
    夹()
    自动后退(500)
    for (let index = 0; index < 2; index++) {
        左转直到压线()
    }
    巡线到全白停止()
    松()
}
function backward () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -35)
    neZha.setMotorSpeed(neZha.MotorList.M2, -35)
}
function 中1 () {
    松()
    巡线到全黑停止()
    自动前进(300)
    左转直到压线()
    巡线到全黑停止()
    自动前进(300)
    右转直到压线()
    巡线到全白停止()
    夹()
    自动前进(300)
    左转直到压线()
    巡线到全黑停止()
    自动前进(300)
    左转直到压线()
    巡线到全白停止()
    松()
}
function 下B2 () {
    自动后退(400)
    右转直到压线()
    巡线到全白停止()
    夹()
    自动后退(500)
    for (let index = 0; index < 2; index++) {
        左转直到压线()
    }
    巡线到全白停止()
    松()
}
function 上2 () {
    自动后退(500)
    右转直到压线()
    巡线到全黑停止()
    自动前进(300)
    右转直到压线()
    // T
    巡线到全黑停止()
    自动前进(300)
    右转直到压线()
    for (let index = 0; index < 3; index++) {
        巡线到全白停止()
        自动前进(300)
        左转直到压线()
    }
}
function 巡线到全白停止 () {
    while (true) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_3) && PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.TrackingStateType.Tracking_State_3)) {
            stop()
            basic.pause(100)
            break;
        } else {
            基础巡线()
        }
    }
}
function 下C2 () {
    松()
    右转直到压线()
    巡线到全黑停止()
    自动前进(300)
    左转直到压线()
    巡线到全黑停止()
    自动前进(300)
    左转直到压线()
    巡线到全白停止()
    夹()
    自动后退(400)
    左转直到压线()
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(300)
    }
    右转直到压线()
    巡线到全白停止()
    松()
}
function forward () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 35)
    neZha.setMotorSpeed(neZha.MotorList.M2, 35)
}
function 上1 () {
    松()
    巡线到全白停止()
    自动前进(300)
    右转直到压线()
    巡线到全白停止()
    自动前进(300)
    夹()
    右转直到压线()
    巡线到全白停止()
    松()
    自动后退(200)
    左转直到压线()
    巡线到全黑停止()
    自动前进(300)
    右转直到压线()
}
function 右转直到压线 () {
    right()
    basic.pause(200)
    while (true) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
            stop()
            basic.pause(100)
            break;
        } else {
            right()
        }
    }
    while (true) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_2)) {
            stop()
            basic.pause(100)
            break;
        } else {
            right()
        }
    }
}
function 松 () {
    // 夹
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    basic.pause(200)
}
function 下C1 () {
    自动后退(500)
    for (let index = 0; index < 2; index++) {
        左转直到压线()
    }
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(300)
    }
    右转直到压线()
    巡线到全白停止()
    夹()
    自动后退(400)
    右转直到压线()
    for (let index = 0; index < 2; index++) {
        巡线到全黑停止()
        自动前进(300)
    }
    左转直到压线()
    巡线到全白停止()
    松()
    自动后退(400)
    左转直到压线()
    巡线到全黑停止()
    自动前进(300)
    右转直到压线()
    巡线到全白停止()
}
function 巡线到全黑停止 () {
    while (true) {
        if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.TrackingStateType.Tracking_State_0) && PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.TrackingStateType.Tracking_State_0)) {
            stop()
            basic.pause(100)
            break;
        } else {
            基础巡线()
        }
    }
}
neZha.stopAllMotor()
