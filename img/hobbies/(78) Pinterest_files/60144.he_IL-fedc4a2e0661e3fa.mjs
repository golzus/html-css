(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[60144],{163745:(e,t,i)=>{i.d(t,{Z:()=>m,e:()=>_});var l=i(667294),o=i(240684),n=i(497529),s=i(898781),r=i(46584),a=i(131108),c=i(599997),d=i(883119),u=i(785893);const h=(0,o.ZP)({resolved:{},chunkName:()=>"www-video-VideoWrapper",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!i.m[t]},importAsync:()=>Promise.resolve().then(i.bind(i,158103)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return i(t)},resolve(){return 158103}}),_=Object.freeze({white:"inverse",black:"default"}),x={defaultOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"}};function p({titleText:e,videoPin:t,videoPlaceholderImage:i}){const l=(0,s.ZP)();return(0,u.jsx)(h,{fallback:(0,u.jsx)(d.Ee,{alt:e||"",color:"rgb(111, 91, 77)",naturalHeight:3,naturalWidth:2,src:i||t.metadata.thumbnail,fit:"cover"}),accessibilityMaximizeLabel:l.bt("הגדילו", "Maximize", "Maximize button on video", undefined, true),accessibilityMinimizeLabel:l.bt("הקטינו", "Minimize", "Minimize button on video", undefined, true),accessibilityMuteLabel:l.bt("השתיקו", "Mute", "Mute button on video", undefined, true),accessibilityPauseLabel:l.bt("השהו", "Pause", "Pause button on video", undefined, true),accessibilityPlayLabel:l.bt("הפעילו", "Play", "Play button on video", undefined, true),accessibilityProgressBarLabel:l.bt("מד התקדמות", "Progress bar", "FeedCard.accessibilityProgressBarLabel", undefined, true),accessibilityUnmuteLabel:l.bt("בטלו השתקה", "Unmute", "Unmute button on video", undefined, true),aspectRatio:c.q4,captions:"",controls:!1,loop:!0,isAutoPlay:!0,onPlay:()=>{},onPlayError:()=>{},playing:!0,playsInline:!0,poster:i||t.metadata.thumbnail,src:t.url,volume:0})}function m({buttonAction:e,buttonCustomization:t,buttonText:i,experience:o,hideCompleteButton:s,imageAlt:h,imageUrl:_,openNewTab:m,storyType:g,titleColor:y,titleText:b,titleTextCustomization:f,videoPin:v,videoPlaceholderImage:j}){const[z,P]=(0,l.useState)(!1),{experience_id:w,placement_id:A}=o||{},C=(0,n.Z)(A),I=(0,r.Z)({onVisibilityChanged:e=>{e&&o&&"viewed"!==o.status&&(o.status="viewed",C.viewExperience(A,w,!1,!0))}}),k=()=>{o&&C.completeExperience(A,w,!1,!0)},S=()=>{P(!0)},T=()=>{P(!1)},L="feed_card_video"===g?354:315,M=(0,c.zn)(g),Z=M?a.f8:a.hm,B=M?a.sH:a.HI,E=!M,{color:U,fontSize:H,fontStyle:D,fontWeight:W,horizontalAlignment:X}=(0,c.Mf)(f||{},"web"),{button_background_color:N,button_text_color:O}=t||{};return(0,u.jsxs)(d.xu,{position:"relative",ref:I,children:[(0,u.jsx)(d.xu,{onMouseEnter:S,onMouseLeave:T,children:(0,u.jsxs)(d.rU,{accessibilityLabel:b,href:e,onClick:k,onFocus:S,onBlur:T,target:m?"blank":null,underline:"none",children:[(0,u.jsxs)(d.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},overflow:"hidden",rounding:4,children:[(0,u.jsx)(d.xu,{height:L,width:236,rounding:4,children:"feed_card_video"===g&&v?(0,u.jsx)(p,{titleText:b,videoPin:v,videoPlaceholderImage:j}):_&&(0,u.jsx)(d.Ee,{alt:h||"",color:"rgb(111, 91, 77)",naturalHeight:4,naturalWidth:3,src:_,fit:"cover"})}),E&&(0,u.jsx)(d.xu,{height:L,width:236,dangerouslySetInlineStyle:{__style:z?x.hoverOverlay:x.defaultOverlay},position:"absolute",top:!0,left:!0}),(0,u.jsx)(Z,{children:(0,u.jsx)(d.xv,{align:X,color:y,italic:"italics"===D,weight:W,children:(0,u.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:{color:null!=U?U:void 0,fontSize:H}},children:b})})})]}),!s&&M&&(0,u.jsx)(B,{children:(0,u.jsx)(d.xu,{display:"flex",rounding:"pill",color:"default",dangerouslySetInlineStyle:{__style:{backgroundColor:N}},justifyContent:"center",alignItems:"center",paddingX:2,height:48,children:(0,u.jsx)(d.xv,{weight:"bold",children:(0,u.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:{color:O}},children:i})})})})]})}),!M&&(0,u.jsx)(B,{children:(0,u.jsx)(d.zx,{role:"link",accessibilityLabel:i,color:"gray",fullWidth:!0,href:e,onClick:k,size:"lg",text:i})})]})}},869091:(e,t,i)=>{i.d(t,{Z:()=>w});var l=i(249647),o=i(557115),n=i(883119),s=i(366428),r=i(785893);function a({slotIndex:e,story:t}){var i;const l=(0,s.Z)({componentType:14268,contextLogData:t.aux_fields,impressionType:"Story",loggingId:t.id,slotIndex:e,viewParameter:92,viewType:1});return(0,r.jsx)(n.xu,{ref:l,children:(0,r.jsx)(o.Z,{isInViewOrNext:!0,item:null===(i=t.objects)||void 0===i?void 0:i[0],slotIndex:e,story:t})})}function c({slotIndex:e,story:t}){var i,l;const a=(0,s.Z)({componentType:14269,contextLogData:t.aux_fields,impressionType:"Story",loggingId:t.id,slotIndex:e,viewParameter:92,viewType:1});return(0,r.jsxs)(n.xu,{ref:a,marginBottom:6,children:[(0,r.jsx)(n.xv,{size:"500",weight:"bold",align:"center",children:null===(i=t.title)||void 0===i?void 0:i.format}),null===(l=t.objects)||void 0===l?void 0:l.map(((e,i)=>(0,r.jsx)(n.xu,{marginTop:4,children:(0,r.jsx)(o.Z,{component:14269,isInViewOrNext:!0,item:e,slotIndex:i,story:t,view:1,viewParameter:null})},i)))]})}var d=i(667294),u=i(702664),h=i(407043),_=i(276775),x=i(332611);function p({experienceId:e,copy:{buttonText:t,subtitleText:i,titleText:l},path:o,pins:s,placementId:a}){const{logContextEvent:c}=(0,h.v)(),p=(0,u.useDispatch)(),m=(0,_.useHistory)();(0,d.useEffect)((()=>{c({event_type:13,view_type:1,view_parameter:92,component:200,element:10551}),p((0,x.UT)(a,e,!1,!0))}),[]);return(0,r.jsxs)(n.kC,{alignItems:"stretch",direction:"column",flex:"grow",justifyContent:"start",children:[(0,r.jsx)(n.xu,{paddingY:1,children:(0,r.jsx)(n.X6,{align:"center",size:"400",children:l})}),(0,r.jsx)(n.xu,{paddingY:1,children:(0,r.jsx)(n.xv,{align:"center",children:i})}),(0,r.jsx)(n.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:1,paddingY:2,children:s&&s.map(((e,t)=>((e,t)=>{const{height:i,url:l,width:o}=e.images.orig,s=0===t?0:2;return(0,r.jsx)(n.xu,{marginStart:s,children:(0,r.jsx)(n.zd,{height:72,rounding:2,width:48,children:(0,r.jsx)(n.Ee,{alt:"",color:"",fit:"cover",naturalHeight:i,naturalWidth:o,src:l})})},e.id)})(e,t)))}),(0,r.jsx)(n.xu,{alignSelf:"center",paddingY:2,children:(0,r.jsx)(n.zx,{fullWidth:!0,onClick:()=>{p((0,x.CK)(a,e,!1,!0)),c({event_type:101,view_type:1,view_parameter:92,component:200,element:10551}),m.push(o)},size:"lg",text:t})})]})}var m=i(70061),g=i(543972),y=i(898781),b=i(977558),f=i(773285);const v=424,j=236;function z({buttonAction:e,imageAlt:t,imageHeight:i,imageWidth:l,imageUrl:o,slotIndex:a,storyAuxData:c,storyId:u,subtitle:_,titleText:x}){const[p,m]=(0,d.useState)(!1),{checkExperiment:z}=(0,f.F)(),{logContextEvent:P}=(0,h.v)(),w=(0,y.ZP)(),A=(0,s.Z)({componentType:14103,contextLogData:c,impressionType:"Story",loggingId:u,slotIndex:a,viewParameter:92,viewType:1}),{group:C}=z("hfp_homefeed_web_topic_module",{dangerouslySkipActivation:!0}),I=C.includes("pill"),k=C.includes("zoom"),S=(0,d.useRef)(null),T=(0,d.useRef)(null);(0,d.useEffect)((()=>{const e=()=>{if(p&&T.current&&S.current){const e=window.innerHeight-b.cI-v,t=(e-(T.current.getBoundingClientRect().top-80))/e,i=.3,l=Math.min(t*i+1,1.3);S.current.style.transform=`scale(${l})`}};if(k)return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[p,k]);const L=e=>{P({event_type:101,view_type:1,view_parameter:92,component:14103,element:e,aux_data:c})},M=()=>{L(179)},Z=()=>L();return(0,r.jsx)(g.Z,{options:{threshold:[1]},onVisibilityChange:e=>{if(e&&e.length>0){const{intersectionRatio:t}=e[0];m(t>=1)}},children:s=>(0,r.jsx)(n.xu,{ref:A,dangerouslySetInlineStyle:{__style:{paddingBottom:"16px"}},children:(0,r.jsx)(n.iP,{href:e,onTap:Z,role:"link",children:(0,r.jsx)(n.xu,{height:v,ref:s,width:j,children:o&&(0,r.jsxs)(n.xu,{position:"relative",children:[(0,r.jsx)(n.xu,{height:v,width:j,ref:T,overflow:"hidden",dangerouslySetInlineStyle:{__style:{borderRadius:I?"200px":"16px",WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},children:(0,r.jsx)(n.xu,{height:v,width:j,ref:S,dangerouslySetInlineStyle:{__style:{transition:"transform ease-in-out .1s"}},children:(0,r.jsx)(n.Ee,{alt:t||"",fit:"cover",naturalHeight:i||v,naturalWidth:l||j,src:o})})}),(0,r.jsx)(n.xu,{position:"absolute",right:!0,left:!0,top:!0,bottom:!0,color:"inverse",rounding:4,opacity:.5,dangerouslySetInlineStyle:{__style:{borderRadius:I?"200px":"16px"}}}),(0,r.jsxs)(n.xu,{display:"flex",direction:"column",alignItems:"center",justifyContent:"end",position:"absolute",right:!0,left:!0,top:!0,bottom:!0,paddingY:I?10:8,paddingX:4,children:[(0,r.jsx)(n.X6,{align:"center",color:"inverse",size:"500",children:x}),(0,r.jsx)(n.xu,{marginTop:I?2:1,children:(0,r.jsx)(n.xv,{align:"center",color:"inverse",size:"200",children:_})}),(0,r.jsx)(n.xu,{marginTop:I?4:6,children:(0,r.jsx)(n.zx,{color:"white",size:"lg",onClick:M,text:w.bt("גלו", "Explore", "homefeed_modules_utils.topic.title.prefix", undefined, true)})})]})]})})})})})}var P=i(163745);function w(e){const{itemIdx:t,story:i}=e;if("blended_modules_topic_pin_grid_article"===i.story_type){const e=i,{action:l,custom_properties:o,subtitle:n,title:s}=e;return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(z,{buttonAction:l.url,imageAlt:o.image_alt,imageUrl:o.image,imageHeight:o.height,imageWidth:o.width,slotIndex:t,storyAuxData:e.aux_fields,storyId:e.id,subtitle:n.format,titleText:s.format})})}switch(i.container_type){case 41:const e=i,{copy:o,custom_properties:n,experience:s,objects:d}=e;return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(p,{copy:(0,l.Z)(m.Z)(o),experienceId:s.experience_id,path:n.path,pins:d,placementId:s.placement_id})});case 66:const u=i,{action:h,custom_properties:_,display_options:x,experience:g,story_type:y,title:b}=u;return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(P.Z,{buttonAction:h.url,buttonCustomization:_.button_customization,buttonText:h.text,experience:g,hideCompleteButton:_.hide_complete_button,imageAlt:_.image_alt,imageUrl:_.image,openNewTab:_.open_new_tab,storyType:y,titleColor:P.e[x.title_text_color],titleText:b.format,titleTextCustomization:_.title_text_customization,videoPin:_.video_pin,videoPlaceholderImage:_.video_placeholder_image})});case 135:return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(c,{slotIndex:t,story:i})});case 136:return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(a,{slotIndex:t,story:i})});default:return null}}},375151:(e,t,i)=>{i.d(t,{Z:()=>r});var l=i(121151),o=i(898781),n=i(883119),s=i(785893);function r(e){const t=(0,o.ZP)(),{handleComplete:i,handleDismiss:r}=e,a=(0,s.jsxs)(n.xu,{flex:"grow",position:"relative",display:"flex",direction:"column",width:"100%",children:[(0,s.jsx)(n.xu,{marginBottom:-12,children:(0,s.jsx)(n.Ee,{alt:t.bt("תמונת רשת Pin מסוגננת", "Stylized Pin grid image", "helpUpsellModal.headerImage.altText", undefined, true),naturalHeight:232,naturalWidth:804,src:"https://s.pinimg.com/help_upsell_modal_header.png"})}),(0,s.jsxs)(n.xu,{marginTop:-12,children:[(0,s.jsx)(n.kC,{alignItems:"stretch",justifyContent:"center",children:(0,s.jsx)(n.JO,{accessibilityLabel:t.bt("סמליל לוגו Pinterest", "Pinterest logo icon", "helpUpsellModal.pinterestIcon", undefined, true),color:"brandPrimary",icon:"pinterest",size:48})}),(0,s.jsx)(n.kC,{alignItems:"stretch",justifyContent:"center",children:(0,s.jsxs)(n.xu,{maxWidth:522,children:[(0,s.jsx)(n.xu,{display:"flex",justifyContent:"center",paddingX:12,paddingY:4,children:(0,s.jsx)(n.X6,{align:"center",size:"600",children:t.bt("למדו כיצד לגרום ל-Pinterest לעבוד עבורכם", "Learn how to make Pinterest work for you", "helpUpsellModal.heading", undefined, true)})}),(0,s.jsx)(n.xu,{paddingX:12,children:(0,s.jsx)(n.X6,{align:"center",size:"400",children:t.bt("בדקו את המדריך שלנו ליסודות שמירת סיכות Pin, שתפו רעיונות והתאימו אישית את פיד הבית שלכם.", "Check out our guide to the basics of saving Pins, sharing ideas and customizing your home feed.", "helpUpsellModal.subHeading", undefined, true)})}),(0,s.jsxs)(n.xu,{display:"flex",direction:"row",justifyContent:"center",marginBottom:4,paddingY:12,children:[(0,s.jsx)(n.xu,{display:"flex",direction:"row",paddingX:1,children:(0,s.jsx)(n.zx,{accessibilityLabel:t.bt("שחרור מודאל", "Dismiss modal", "helpUpsellModal.dismissButton.accessibilityLabel", undefined, true),onClick:r,size:"lg",text:t.bt("אולי מאוחר יותר", "Maybe later", "helpUpsellModal.dismissButton.buttonText", undefined, true)})}),(0,s.jsx)(n.xu,{display:"flex",direction:"row",paddingX:1,children:(0,s.jsx)(n.zx,{role:"link",href:"/welcome/",accessibilityLabel:t.bt("המשיכו למדריכים למשתמש החדש", "Continue to new user welcome guides", "helpUpsellModal.confirmButton.accessibilityLabel", undefined, true),color:"red",onClick:i,size:"lg",text:t.bt("קדימה", "Let's go", "helpUpsellModal.confirmButton.buttonText", undefined, true)})})]})]})})]})]});return(0,s.jsx)(l.ZP,{accessibilityModalLabel:t.bt("למדו כיצד לגרום ל-Pinterest לעבוד עבורכם", "Learn how to make Pinterest work for you", "helpUpsellModal.accessibilityModalLabel", undefined, true),heading:a,onDismiss:r,size:"lg"})}},131108:(e,t,i)=>{i.d(t,{HI:()=>s,f8:()=>a,hm:()=>r,sH:()=>n});var l=i(883119),o=i(785893);const n=({children:e})=>(0,o.jsx)(l.xu,{padding:4,position:"absolute",bottom:!0,left:!0,right:!0,children:e}),s=({children:e})=>(0,o.jsx)(l.xu,{padding:2,children:e}),r=({children:e})=>(0,o.jsx)(l.xu,{display:"flex",position:"absolute",top:!0,height:"100%",width:"100%",alignItems:"center",justifyContent:"center",children:e}),a=({children:e})=>(0,o.jsx)(l.xu,{padding:4,position:"absolute",top:!0,left:!0,right:!0,children:e})},599997:(e,t,i)=>{i.d(t,{Ec:()=>c,IA:()=>m,LX:()=>d,Mf:()=>p,SF:()=>r,_e:()=>a,l0:()=>s,ml:()=>n,q4:()=>o,zn:()=>l});const l=e=>["feed_card_default","feed_card_video"].includes(e),o=2/3,n=2/3,s=1/3,r="36px",a="28px",c=.4,d=.65,u={0:"start",1:"center",2:"end"},h={web:{0:"16",1:"20",2:"24"},mweb:{0:"12",1:"16",2:"18",3:"20"}},_={1:"italics",0:"normal"},x={1:"bold",0:"normal"},p=({color:e,font_style:t,font_weight:i,horizontal_alignment:l,size:o},n)=>({color:e,fontStyle:_[null!=t?t:0],fontWeight:x[null!=i?i:1],horizontalAlignment:u[null!=l?l:0],fontSize:h[n][null!=o?o:0]+"px"}),m=e=>e<=280?1.25:e>280&&e<=540?.75:e>540&&e<1024?d:c},6663:(e,t,i)=>{i.d(t,{Z:()=>c});var l=i(667294),o=i(701500),n=i(391254),s=i(898781),r=i(883119),a=i(785893);function c({color:e,completeButtonText:t,completeUrl:i,dismissButtonText:c,experienceId:d,external:u,message:h,onComplete:_,onDismiss:x}){const p=(0,s.ZP)(),m=(0,l.useRef)(null),g=({event:e})=>{_&&_(e)},y=({event:e})=>{x&&x(e)},b=h&&!t,f=500735===d,v=t&&(!i||f)&&(0,a.jsx)(r.zx,{color:"white",onClick:g,text:t}),j=t&&i&&(0,a.jsx)(o.Z,{anchor:".HomeButton2",anchorElementRef:m.current,containerBoxConfig:{display:"flex",height:"100%"},children:(0,a.jsx)(r.zx,{accessibilityLabel:t,ref:m,role:"link",href:i,onClick:({event:e})=>g({event:e}),rel:u?"nofollow":"none",size:"md",color:"white",text:t},"naglink")}),z=c&&x&&(0,a.jsx)(r.xu,{mdPaddingX:2,children:(0,a.jsx)(r.zx,{color:e&&"default"!==e?"white":"gray",onClick:y,text:c})}),P=b&&!f&&x&&!c&&(0,a.jsx)(r.hU,{accessibilityLabel:p.bt("סגירה", "Close", "accessibility close label", undefined, true),bgColor:"lightGray",onClick:y,icon:"cancel",iconColor:"gray",size:"md"});return(0,a.jsxs)(r.xu,{display:"flex",direction:"column",smDirection:"row",color:null!=e?e:"dark",paddingY:3,paddingX:6,alignItems:"center",justifyContent:"between",children:[(0,a.jsx)(r.xu,{column:12,smColumn:b?11:8,children:(0,a.jsxs)(r.xv,{color:"inverse",weight:f?"normal":"bold",children:[(0,a.jsx)(n.Z,{unsafeCSS:".Banner--message a { color: #fff; text-decoration: underline; }"}),(0,a.jsx)("div",{className:"Banner--message",children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:h}})})]})}),(0,a.jsxs)(r.kC,{alignItems:"center",justifyContent:"end",children:[z,v||j,P]})]})}},427806:(e,t,i)=>{i.d(t,{Z:()=>n});var l=i(883119),o=i(785893);function n({text:e}){return(0,o.jsx)(l.xu,{display:"visuallyHidden",children:(0,o.jsx)(l.X6,{accessibilityLevel:1,children:e})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/60144.he_IL-fedc4a2e0661e3fa.mjs.map