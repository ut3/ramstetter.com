+++
title = "Academic Work"
Date = "2024-02-08"
+++

I enjoyed my time in academia. Here are some papers and other things I wrote:

### PDF: [My master's non-thesis on Bezier Spline Routing](bezier-spline-routing.pdf)

:warning: All that survives is a draft copy with typos. Even [Rich Martin](https://people.cs.rutgers.edu/~rmartin/) doesn't have a better copy.

> In dense sensor networks, Trajectory Based Routing (TBR) allows a source node to encode in some
packet’s header a mathematical (e.g. polynomial) curve deﬁning that packet’s route. Intermediary nodes
make a best-effort to route the packet along this curve. Bezier curves, used widely in computer graphics,
allow message trajectories to be described by complex and non-invertable curves. In this work, I imple-
ment in Matlab a generalized simulator for TBR protocols in dense sensor networks. Atop that simulator,
I implement multiple variations of the same Bezier-spline routing protocol. By using a Bezier-spline
representation of trajectories, I am able to examine the tradeoff betweeen a high-degree Bezier curve
representation of a desired route (e.g. a single, high degree function piece) and a multi-piece spline
(consisting of lower degree or linear pieces) approximating that same high-degree curve. I consider
three cases: 1) many-piece-linear splines, 2) many-piece-cubic splines, and 3) single-piece, high-degree
curves. Each of these cases is evaluated on multiple variations of the same Bezier-spline protocol. I ﬁnd
that many-piece-cubic splines have the lowest cost in representing the vast majority of tested trajectories,
and allow for the smallest-size representation of trajectories in packet headers. I also ﬁnd that simple
optimizations (resulting in the aforementioned variations on the same protocol) have a signiﬁcant impact
on performance and energy usage.



---

### PDF: [A publication in an open-access journal](future-internet-danfeng-yao.pdf)
> Pervasive wireless systems have signiﬁcantly improved end-users’ quality of
life. As manufacturing costs decrease, communications bandwidth increases, and contextual
information is made more readily available, the role of next generation wireless systems in
facilitating users’ daily activities will grow. Unique security and privacy issues exist in these
wireless, context-aware, often decentralized systems. For example, the pervasive nature
of such systems allows adversaries to launch stealthy attacks against them. In this review
paper, we survey several emergent personal wireless systems and their applications. These
systems include mobile social networks, active implantable medical devices, and consumer
products. We explore each system’s usage of contextual information and provide insight into
its security vulnerabilities. Where possible, we describe existing solutions for defending
against these vulnerabilities. Finally, we point out promising future research directions for
improving these systems’ robustness and security.

---


### PDF: [A major class project on stable ICMP ping for localization](stable-ping.pdf)
> The ability to provide for the localization and ranging of moving devices using 802.11 WiFi and other consumer
grade equipment is sought, in part due to the low cost and large user base of such equipment. A primary
obstacle of efforts in this direction is the high variance and high average magnitude seen in echo/response round
trip times (ICMP "Ping," for example) over 802.11 equipment. These problems stem in large part from the
deferred processing paradigm of modern device drivers. This work demonstrates that by violating this paradigm
 a reduction of the average round trip time magnitude for echoes and responses can be had, and a reduction
in corresponding variance can be had. This work further demonstrates the ability of consumer grade equipment
to more precisely record the departure and arrival time of 802.11 packets.

