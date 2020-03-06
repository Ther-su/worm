package cn.ther.test;

import cn.ther.util.Connection;
import cn.ther.util.RegexMatch;

public class WormTest {
	public static void main(String[] args) {
		String url="http://jw.scut.edu.cn/dist/#/home/index";
		//String url1="https://file1.dxycdn.com/2020/0130/492/3393874921745912795-115.json?t=26381282";
		String result=Connection.getMessage(url);
		System.out.println(result);
		//String regex_res=RegexMatch.getRegex(result,"(?<=data\":)(.*?)(?=,\"message)",1);
		//System.out.println(regex_res);		
	}
}
