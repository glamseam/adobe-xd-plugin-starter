import { type XDSelection } from 'scenegraph'

export const selection = (selection: XDSelection) => {
    selection.items.forEach((sceneNode) => {
        console.log('sceneNode', sceneNode)
        sceneNode.children.forEach((childSceneNode, i) => {
            console.log(`childSceneNode${i}`, childSceneNode)
        })
    })
}
