import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
    { menuItem: 'ENKİ NE DEMEK?', pane: 'Umutsuzların Umudu, İnsan Dostu '},
    { menuItem: 'VİZYONUMUZ', pane: '“Türkiye’de ve dünyada, insanımızın yanında hizmette model alınan, insanların en zor anlarında yanındaki kuruluş olmak.”' },
    { menuItem: 'MİSYONUMUZ', pane: '“Reaktif bir vakıf olarak her türlü olağan veya olağanüstü dönemde ihtiyaç sahipleri ve korunmasızlara yönelik yardım sağlamak, toplumda yardımlaşmayı geliştirmek, daha fazla kişiye ulaşıp faaliyet göstermek”' },
  ]
  
  const SayfaHakkında = () => <Tab panes={panes} renderActiveOnly={false} />
  
  export default SayfaHakkında


