package cn.ther.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;



public class RegexMatch {
	public static String getRegex(String targetStr, String patternStr,int i) {
		// ����һ����ʽģ�壬����ʹ��������ʽ����������Ҫץ������ // �൱�����������ƥ��ĵط��ͻ����ȥ
				Pattern pattern = Pattern.compile(patternStr);
				// ����һ��matcher������ƥ��

				Matcher matcher = pattern.matcher(targetStr);
				// ����ҵ���
				if (matcher.find())
				{
					// ��ӡ�����
					return matcher.group(i);
		
				}

				return "";
		
	}

}
