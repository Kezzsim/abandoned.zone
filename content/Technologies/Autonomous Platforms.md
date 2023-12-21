---
creation_date: 12/19/23
authors:
  - Kari K. Barry
---
![A Boston Dynamics SPOT drone equipped with a Trimble X7 LIDAR geometry scanner](https://media.wired.com/photos/5f92e32c227dbb78ec30da74/master/pass/Science_Spot_AB_0P1A1612.jpg) 
<br/>
Boston Dynamic's SPOT robot equipped with a LIDAR scanner | [Image attribution](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Fstory%2Fget-wired-podcast-14-boston-dynamics%2F&psig=AOvVaw3CyM17OAkr4SXcI20WCHF_&ust=1703096449608000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCNDZ2eyOnIMDFQAAAAAdAAAAABAD)

---

# Overview
Due to the intense environmental hazards presented while scanning abandoned buildings, the ideal route to both maximize data collection and minimize human exposure is to implement hierarchical controls. OSHA describes this process using the following graphic:
![A diagram of the Hierarchy of Controls courtesy of the CDC ](https://www.cdc.gov/niosh/topics/hierarchy/images/NIOSH_HOC_Main_508_photocredit.jpg) 
For brief episodes of urban exploration, personal protective equipment like respirators, helmets and paper suits are sufficient for mitigating exposure to asbestos and falling debris. However, for a prolonged (government sanctioned) scanning operation like the one envisaged by [*abandoned.ai*](https://abandoned.ai) , something more substantial is required.

Robotic platforms can endure many hours in harsh environments, they are also capable of automating movement and positioning in ways that would otherwise be tedious for a human operator. The extensive photogrammetric process required by advanced machine learning algorithms like NeRF requires a high throughput of training data in which the nature of available lighting will inevitably become baked in to the captured scene. Due to this factor, one autonomous device is insufficient for most scans due to the natural dark environments found in abandoned buildings.

Things to consider when picking an A.C.P. (Autonomous Capture Platforms):
- How scalable is it to deploy? Can I have multiple units operating simultaneously in the same room?
- How frequently will it need to return to a base station to charge it's batteries?
- Does it have fans that could potentially kick up or carry friable asbestos?
- Abandoned buildings are often built of dense materials that are averse to RF? How consistent is the connection even in areas like steam tunnels?
- Can the device be operated through a cable if there is a need?
- Can the device ascend and descend stairs? 

---

## Flying Autonomous Platforms
Drones have become ubiquitous in everyday life as technology companies continue to push for their usage as delivery vehicles and surveillance apparatuses. Drones can produce suitable scans of buildings but mainly from the outside only because there are a lot of chances for collisions against the propeller in tight spaces. [Skydio](https://www.skydio.com/) produces drones that are capable of following an automated path which can be set specifically for photogrammetric use. 

![[skydio.gif]]

Pros:
- Easily automated positioning and camera controls
- Commercially available solutions are relatively inexpensive

Cons:
- Suitable mainly for building exteriors as there is a requirement for lots of space
- Requires a high level of ambient illumination in order to navigate safely
