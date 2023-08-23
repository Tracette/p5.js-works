let subtitleData = [
    [0.475, 1.025, "Hello! Who is this?"],
    [1.725, 6.225, "I am Yu Wenming from No. 37, Yongkang Road."],
    [6.35, 7.125, "Hi, Mr.Yu"],
    [7.132, 8.532, "I can't take it anymore. "],
    [9.767, 13.425, "I have finished my medicine now"],
    [13.85, 14.554, "you know"],
    [15.047, 16.63, "and I have no food left"],
    [16.668, 17.826, "Nothing to eat"],
    [17.952, 20.066, "I feel very unwell now"],
    [20.645, 21.774, "What do you lack? "],
    [22.054, 24.457, "Yesterday, when your son asked me to fetch medicine for your spouse,"],
    [24.467, 27.517, "why didn't you ask me to get some for you as well?"],
    [28.299, 30.113, "I feel very unwell "],
    [30.113, 31.069, "my throat hurts"],
    [31.484, 33.704, "and my temperature is slowly rising"],
    [33.704, 37.014, "I can bring you some Lianhua Qingwen granules."],
    [37.516, 40.18, "We still, still have some of that"],
    [40.344, 41.242, "But so far"],
    [41.242, 43.326, "our neighborhood committee only has this type of medicine."],
    [43.973, 46.907, "I want to get a CT scan."],
    [47.583, 50.121, "The decision to get a CT scan isn't up to our neighborhood committee."],
    [50.131, 54.184, "No, I want to go to the hospital and get a CT scan."],
    [54.184, 56.057, "We have already submitted your name"],
    [56.057, 58.431, "but the higher authorities have not taken any action."],
    [58.431, 62.669, "So after all this time without resolving my issue"],
    [62.669, 63.788, "what am I gonna do? "],
    [64.136, 66.364, "Just wait to die?"],
    [66.597, 67.9, "I don't know, Mr. Yu. "],
    [67.919, 68.653, "Ah?"],
    [68.701, 70.129, "I really don't know, Mr. Yu. "],
    [70.129, 71.68299999999999, "Which department should I ask? "],
    [71.712, 73.228, "You have to push them for me"],
    [73.237, 75.226, "You're my only recourse"],
    [75.303, 78.381, "I've already reported your situation for you"],
    [78.42, 79.781, "So you just report it and that's it? "],
    [79.781, 81.354, "I've waited so many days"],
    [81.354, 83.439, "without hearing a response from you."],
    [83.584, 85.543, "They haven't responded to me."],
    [85.69800000000001, 86.209, "So?"],
    [86.431, 88.738, "So they don't respond, and you just let it be?"],
    [88.863, 89.848, "It's not like that. "],
    [89.887, 91.846, "I have a lot to report on, "],
    [91.846, 93.66, "not just your case"],
    [93.824, 96.22800000000001, "Today, I managed to assist a pregnant woman "],
    [96.575, 98.99799999999999, "and dealt with a deceased elderly person"],
    [100.99600000000001, 101.797, "Mr. Yu"],
    [101.797, 102.907, "it's not that we're not taking action. "],
    [102.926, 103.418, "Instead,"],
    [103.428, 105.021, "We have done a lot"],
    [106.845, 107.482, "Yeah?"],
    [108.814, 111.88300000000001, "We have done everything within our power, "],
    [111.88300000000001, 114.431, "and even things that aren't in our purview."],
    [114.479, 115.628, "Given this"],
    [115.705, 120.748, "can't you escalate it to higher authorities?"],
    [120.936, 124.015, "Our immediate superiors are at the street level. "],
    [124.015, 126.139, "We can't report to the district level authorities. "],
    [126.187, 127.55799999999999, "Residents can escalate it"],
    [127.56700000000001, 128.291, "you can escalate it"],
    [128.339, 129.536, "But let me tell you, "],
    [129.546, 133.406, "the Shanghai 12345 hotline is essentially nonfunctional right now."],
    [133.725, 136.032, "I've already reported it there."],
    [136.128, 137.325, "Yes, you've reported it! "],
    [137.344, 138.29, "And did you see any results?"],
    [138.416, 139.613, "Did you see any result?"],
    [139.699, 142.605, "I don't mean to be harsh, "],
    [142.846, 144.245, "but I'm desperate too"],
    [144.245, 145.5, "I am furious too"],
    [145.5, 146.793, "I feel helpless! "],
    [147.315, 147.797, "Alright"],
    [148.174, 149.863, "But Mr. Yu, there's nothing I can do!"],
    [149.872, 151.571, "nothing we can do!"],
    [152.324, 153.53, "I can't do anything about it"],
    [153.53, 154.611, "So what should we do?"],
    [154.949, 156.40699999999998, "I don't know what to do either"],
    [156.696, 159.05, "There are many people"],
    [159.05, 161.067, "so many people like you "],
    [161.067, 162.328, "in front of me"],
    [162.507, 163.945, "and the government is not taking any action"],
    [166.001, 167.101, "So, given this"],
    [167.101, 167.786, "what's the solution? "],
    [167.786, 169.34, "Are we supposed to bear it all?"],
    [169.823, 170.80700000000002, "I don't know. "],
    [171.01, 172.12, "Perhaps one day "],
    [172.332, 173.732, "I won't be able to bear it anymore"],
    [173.78, 174.871, "and I'll quit first"],
    [175.09300000000002, 176.434, "I don't know "],
    [176.666, 178.278, "if that day will come soon. "],
    [178.30700000000002, 178.808, "Mr. Yu"],
    [179.195, 179.832, "Mr. Yu"],
    [179.832, 180.98, "I feel even more wronged than you."],
    [181.434, 181.974, "Well"],
    [182.582, 183.325, "Yeah"],
    [183.48, 186.395, "I might feel the same way in your position"],
    [186.559, 190.796, "But I've called the street office all day "],
    [190.796, 191.983, "and couldn't get through. "],
    [192.997, 194.242, "More than that"],
    [194.357, 196.085, "I've tried 12345 (hotline)"],
    [196.143, 197.572, "and even 110 "],
    [198.517, 199.608, "I know you've called. "],
    [199.647, 200.699, "Did you get any results?"],
    [201.21, 203.044, "I did say there were no results, right? "],
    [203.536, 204.743, "There were none."],
    [204.781, 206.924, "I don't know what they're considering."],
    [208.488, 209.019, "(Sigh)"],
    [209.057, 211.152, "Can't they save our ordinary people?"],
    [212.339, 214.36599999999999, "I wish they would come and save our people too. "],
    [215.15699999999998, 216.142, "I wish they would!"],
    [218.738, 219.645, "Why?"],
    [220.562, 222.70499999999998, "Why? Why? Why!"],
    [224.153, 225.542, "Why do they act like this? "],
    [225.62, 226.865, "That's what I'm saying"],
    [228.785, 230.05, "They don't care about the elderly"],
    [230.05, 231.276, "don't care about the pregnant"],
    [231.324, 232.984, "even the deceased"],
    [233.68, 235.19400000000002, "not even about trash bins!"],
    [237.626, 239.75900000000001, "I've reported it to the Municipal Committee too."],
    [240.001, 241.864, "I've been pushed back all the time"],
    [243.968, 244.865, "Mr. Yu"],
    [244.981, 246.439, "I'm really at a loss. "],
    [246.439, 247.104, "I have no idea"],
    [247.191, 247.973, "Right now, "],
    [248.765, 250.569, "I feel even sadder than you. "],
    [251.284, 253.861, "Because you're just one family, "],
    [253.861, 254.836, "but I see countless families."],
    [258.513, 262.721, "I truly understand everything you're talking about."],
    [264.748, 267.402, "I've reported your situation in writing "],
    [268.02, 269.748, "and have made countless calls. "],
    [272.383, 273.415, "Thank you."],
    [274.139, 276.629, "I'm sorry, Mr. Yu, I'm powerless."],
    [277.903, 278.608, "(sigh)"],
    [278.627, 279.457, "what a world!"],
    [279.592, 284.931, "Is this the state of our country? "],
    [285.017, 285.548, "I don't know either."],
    [285.548, 286.426, "Why has Shanghai become like this? "],
    [288.105, 290.383, "Alright, Mr. Yu."],
    [291.743, 293.132, "(sigh) "],
    [293.481, 294.652, "Goodbye!"],

];

class Subtitle {
    constructor(subtitleData) {
        this.data = subtitleData;
        this.current_index = 0;
    }

    getSubtitle(elapsedTime) {
        while (this.current_index < this.data.length && this.data[this.current_index][1] < elapsedTime) {
            this.current_index += 1;
        }
        if (this.current_index < this.data.length && 
            this.data[this.current_index][0] <= elapsedTime && 
            elapsedTime <= this.data[this.current_index][1]) {
            return this.data[this.current_index][2];
        }
        return null;  // Return null if no subtitle should be displayed
    }
  
    reset() {
        this.current_index = 0;
    }
}
