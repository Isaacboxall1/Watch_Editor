import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function AppleWatch(props) {

  const { nodes, materials } = useGLTF('/apple-watch-ultra-orange/scene.gltf')

  return (
    <group {...props} dispose={null} rotation={[0.5,0,0]} position={[0.05,-0.15,0]} onClick={props.functionality}>
      <group scale={0.18}>
        <mesh geometry={nodes.PPhvAUHUGzJYMhL.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.LWVGlhvktNPWDmu.geometry} material={materials.hlaWqbXPxAbQzbJ}  />
        <mesh geometry={nodes.eXUJdTIAeUGmQLZ.geometry} material={materials.YWfwokrwvbztRbo}  name="inside"/>
        <mesh geometry={nodes.khaHlXdxjItYhNs.geometry} material={materials.JhVSDiADFtJHFLa} />
        <mesh geometry={nodes.vWfihlqoNhaJTLj.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.qfqlcqjRdzzVekA.geometry} material={materials.YWfwokrwvbztRbo} />
        <mesh geometry={nodes.DpLeqowIFgYtGjG.geometry} material={materials.lokMFBOdPtkNVUL}  name="dark outlines" />
        <mesh geometry={nodes.lTuqHocPHeeYuLO.geometry} material={materials.cEvUsXxsuGocZLw}   name="face border" />
        <group name="body" onClick={()=> props.selectComponent('body')}>
        <mesh geometry={nodes.wMgdGPGcmgrPUeE.geometry} material={materials.DpfyoSSiSSiguqV} material-color={props.color.body} name="main metal body"/>
        </group>
        <mesh geometry={nodes.yPaUlGyzZhvStMM.geometry} material={materials.DpfyoSSiSSiguqV} />
        <mesh geometry={nodes.KZLnjqsQgoygPoi.geometry} material={materials.WqlRgaclVpXEtLR} name="white outlines"  />
        <mesh geometry={nodes.XYTcEkWJWbbjayl.geometry} material={materials.DpfyoSSiSSiguqV} name="back indent" />
        <mesh geometry={nodes.yXwlQnMKInchVwb.geometry} material={materials.WqlRgaclVpXEtLR} name="back indent"/>
        <mesh geometry={nodes.BDhXHhWQPzbsApC.geometry} material={materials.OraiDWpYBKrUaVi} name="back indent"/>
        <group name="buttons"  onClick={()=> props.selectComponent('buttons')}>
        <mesh geometry={nodes.ARsYRDtRfaqRvjc.geometry} material={materials.RLtPucjBYpWldMw} material-color={props.color.buttons} name="left button face"/>
        <mesh geometry={nodes.dEgYDFMHfbkpmEF.geometry} material={materials.vAAmUmRloGrqeoZ} material-color={props.color.buttons} name="left button knob"/>
        <mesh geometry={nodes.sYBCdasHzmkyDRS.geometry} material={materials.DpfyoSSiSSiguqV}  name="left button face"/>
        <mesh geometry={nodes.slfmzSCVEebgEnx.geometry} material={materials.vAAmUmRloGrqeoZ} material-color={props.color.buttons} name="left button border"/>
        <mesh geometry={nodes.cUdLcKThVrgrQtG.geometry} material={materials.hgluOErnmhtiUYN} material-color={props.color.buttons} name="knob color ring" />
        <mesh geometry={nodes.uwsZHcLJnpKqEWY.geometry} material={materials.WNpOSdXcedsiIxb}  name="knob" />
        <mesh geometry={nodes.dDmAxNyjhIDOSOh.geometry} material={materials.FWVZLUbBnucfoaf}  name="knob"/>
        <mesh geometry={nodes.dApvNLhuSmTYFHU.geometry} material={materials.cEvUsXxsuGocZLw} name="knob"/>
        <mesh geometry={nodes.usBhaSMGegdgFZD.geometry} material={materials.DpfyoSSiSSiguqV}  name="knob"/>
        </group>
        
        <mesh geometry={nodes.TgXjmfNiJNmBEaf.geometry} material={materials.WTIUJKaXCMoeXRu} name="screen frame" />
        <mesh geometry={nodes.oNBZPqvuuOZaMJD.geometry} material={materials.ZaRnLYKTtVDoxDv}  name="watch back information"/>
        <mesh geometry={nodes.KsxIrenucRYdQlx.geometry} material={materials.FNPDFKuVXKOlvzh} name="watch back dark reflective area"/>
        <mesh geometry={nodes.ukHQvPcopDbGAeP.geometry} material={materials.kCssvzrClyGUQkQ} material-color={props.color.back} name="watch back"/>
        <mesh geometry={nodes.wlIPQLVNyFEOcyR.geometry} material={materials.kCssvzrClyGUQkQ}  name="back screws"/>
        <mesh geometry={nodes.dutMHxWYxKkWoIl.geometry} material={materials.ytyYsmKHSFPTRzX}  name="inside of face 6"/>
        <mesh geometry={nodes.IXiSHYGuoMgcNgF.geometry} material={materials.XrFeyJHNdKUjpKu} name="inside of speaker"/>
        <mesh geometry={nodes.PTPnChoGCzenuOx.geometry} material={materials.PZbVgVTNgRssNlb}  name="inside of face 4"/>
        <mesh geometry={nodes.vaRMlNGtRRowtqF.geometry} material={materials.CpdaRQhrDwkjJvt}   name="inside of face 3"/>
        <mesh geometry={nodes.fCkJQDPNwsNBzWm.geometry} material={materials.XPzMameFUCFBvNY} name="back sensor ring"/>
        <mesh geometry={nodes.YbfvuZWRqXlvTkW.geometry} material={materials.YWfwokrwvbztRbo} name="inside of face"/>
        <mesh geometry={nodes.scpcAfQFCzMwocy.geometry} material={materials.nwKRBiBrdJBKTDX} name="other-face-part"/>
        <mesh geometry={nodes.wmnqxNpNCdRfDfA.geometry} material={materials.UlFjqascpPnJnyb} name="face"/>
        <mesh geometry={nodes.SAesXTqirPZWRXc.geometry} material={materials.LMNEMIqLLSofXax} name="inner-buckle"/>
        <mesh geometry={nodes.uFzdsQxnXjPAlfo.geometry} material={materials.DpfyoSSiSSiguqV}  name="buckle"/>
        <mesh geometry={nodes.vdoUifIjrUGtLiS.geometry} material={materials.DpfyoSSiSSiguqV}  name="bottom-face"/>
        <mesh geometry={nodes.DPJxFEyTsdtZHfm.geometry} material={materials.DpfyoSSiSSiguqV} name="top-face" />
        <mesh geometry={nodes.cYPgdqcCkfmEnrF.geometry} material={materials.ObrQaHSLRyNZejZ} />
        <group name="strap" onClick={()=> props.selectComponent('strap')}>
        <mesh geometry={nodes.yFPJxjHCZaMTTSP.geometry} material={materials.PwlvrZKCtsfdXgk} material-color={props.color.strap}/>
        <mesh geometry={nodes.hFurRdLJljkLFkB.geometry} material={materials.zWSbkmvYqArUSOM} material-color={props.color.strap}/>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/apple-watch-ultra-orange/scene.gltf')
