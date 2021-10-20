import { Builder, Capabilities, By}
from "selenium-webdriver"

import {beforeAll, afterAll, test}
from '@jest/globals'

const chromedriver = require ('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() => {
    await driver.get('http://localhost:5500/movieList/')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add movie', async() => {

    let searchBar = await driver.findElement(By.xpath("//input"))

    await searchBar.sendKeys('A League of Their Own\n')

    await driver.sleep(2000)

    searchBar = await driver.findElement(By.xpath("//input"))
})
