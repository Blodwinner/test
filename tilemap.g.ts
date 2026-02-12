// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`1000100003030000000000030000000000000000030302050502000300000000000000000303030303050303030303030300000003030302020203030000000003000000030003030303030101000000030000000302030202020303020200010300000003020303030303030302010103000000030203030300030303030303030303000303030303030303030303000300030000030303030303030303030303000303010103010103030303030300000003000101030303030303010103030303030000030303030303030303030303000000000303030000000303030300000000000303030303030303030303030300000003030303030303030303000000030000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 . . . . . 
. 2 . . . . . . . . 2 . . . . . 
. 2 . . . . . . . . 2 . . . . . 
. 2 . . 2 . . . . . 2 . . . . . 
. 2 . 2 2 2 2 2 2 2 2 . . . . . 
. 2 . . 2 2 2 . . 2 2 . . . . . 
. 2 2 2 2 2 2 2 2 2 2 . . . . . 
. . . . 2 . 2 2 2 2 2 2 . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath9,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
